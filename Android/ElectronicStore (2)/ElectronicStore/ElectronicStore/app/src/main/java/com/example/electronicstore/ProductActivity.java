package com.example.electronicstore;

import static com.example.electronicstore.utils.Constants.BASE_URL;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.text.Layout;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.electronicstore.activity.DetailsActivity;
import com.example.electronicstore.activity.RegistrationActivity;
import com.example.electronicstore.adapter.ProductAdapter;
import com.example.electronicstore.backendservices.UserService;
import com.example.electronicstore.entity.Product;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ProductActivity extends AppCompatActivity {


    RecyclerView recyclerView;
    ProductAdapter productAdapter;
    List<Product> productList;
    int p_id;

    int t_id;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product);

//        productLayout= findViewById(R.id.productLayout);
//
//        productLayout.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                Intent intent = new Intent(getApplicationContext(), DetailsActivity.class);
//                startActivity(intent);
//
//            }
//        });
        Bundle extras = getIntent().getExtras();
        t_id= extras.getInt("t_id");
        recyclerView =findViewById(R.id.recyclerView);
        productList = new ArrayList<>();
        productAdapter = new ProductAdapter(productList,getApplicationContext());
        recyclerView.setAdapter(productAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(getApplicationContext(),1));


        //Toast.makeText(this, "bvbvbv" + t_id, Toast.LENGTH_SHORT).show();
        getData();
    }

    public void getData() {
        new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(BASE_URL)
                .build()
                .create(UserService.class)
                .getProducts(t_id)
                .enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                        // Log.e("hello",BASE_URL);
                        JsonArray array = response.body().getAsJsonArray("data");
                        JsonObject object;
                        if (array.size() > 0) {
                            for (int i = 0; i < array.size(); i++) {

                                object = array.get(i).getAsJsonObject();
                                Product product = new Product();

                                product.setName(object.get("name").getAsString());
                                product.setP_id(object.get("p_id").getAsInt());
                                productList.add(product);
                                Log.e("services",""+ product);
                            }
                            productAdapter.notifyDataSetChanged();
                        }

                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {

                    }
                });
    }
}
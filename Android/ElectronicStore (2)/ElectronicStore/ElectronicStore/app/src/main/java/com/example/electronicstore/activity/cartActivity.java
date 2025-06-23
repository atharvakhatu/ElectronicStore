package com.example.electronicstore.activity;

import static com.example.electronicstore.utils.Constants.BASE_URL;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.electronicstore.R;
import com.example.electronicstore.ThankYouActivity;
import com.example.electronicstore.adapter.CartListAdapter;
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

public class cartActivity extends AppCompatActivity {
    RecyclerView recyclerView;
    CartListAdapter cartListAdapter;
    List<Product> productList;
    TextView productname;
    Button btnPlaceOrder;
    int p_id;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cart);

        productname = findViewById(R.id.productname);
        btnPlaceOrder =findViewById(R.id.btnPlaceOrder);

        btnPlaceOrder.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(cartActivity.this, ThankYouActivity .class);
                startActivity(intent);
            }
        });
       productList = new ArrayList<>();
       // productList.add("TV");

        p_id = getIntent().getIntExtra("pid", 0);
        Log.e("pid", "pid key"+p_id);
       // Log.e("Cart",""+ p_id);


        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        cartListAdapter= new CartListAdapter(productList,this);

        recyclerView.setAdapter(cartListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(getApplicationContext(),1));

        getData();

    }
        public void getData()
        {
           // productList = new ArrayList<>();
            new Retrofit.Builder()
                    .addConverterFactory(GsonConverterFactory.create())
                    .baseUrl(BASE_URL)
                    .build()
                    .create(UserService.class)
                    .getAllCartCustomer(2)
                    .enqueue(new Callback<JsonObject>() {
                        @Override
                        public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                            // Log.e("hello",BASE_URL);
                            Toast.makeText(cartActivity.this, "onSuccess", Toast.LENGTH_SHORT).show();
                            JsonArray array = response.body().getAsJsonArray("data");
                            JsonObject object;
                            if (array.size() > 0) {
                                for (int i = 0; i < array.size(); i++) {

                                    object = array.get(i).getAsJsonObject();
                                    Product product = new Product();

                                    product.setName(object.get("product").getAsJsonObject().get("name").getAsString());
                                    product.setP_id(object.get("quantity").getAsInt());
                                    productList.add(product);
                                    Log.e("Cart",""+ productList);
                                }
                                cartListAdapter.notifyDataSetChanged();
                            }

                        }

                        @Override
                        public void onFailure(Call<JsonObject> call, Throwable t) {
                          //  Toast.makeText(cartActivity.this, "onFailure", Toast.LENGTH_SHORT).show();
                        }
                    });
        }



}
package com.example.electronicstore.activity;

import static com.example.electronicstore.utils.Constants.BASE_URL;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.electronicstore.R;
import com.example.electronicstore.backendservices.UserService;
import com.example.electronicstore.entity.Product;
import com.example.electronicstore.utils.Constants;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class DetailsActivity extends AppCompatActivity {
    TextView textName, textdescription, textPrice;
    ImageView imgProduct;
    Button btnBuy;
    int pid;
   // List<Product> productList;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);

        pid = getIntent().getIntExtra("pid",0);

        Log.e("pid", "pids "+pid);
        getData(pid);
        textName = findViewById(R.id.textName);
        textdescription = findViewById(R.id.textdescription);
        textPrice = findViewById(R.id.textPrice);
        btnBuy = findViewById(R.id.btnBuy);

        btnBuy.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(DetailsActivity.this, cartActivity.class).putExtra("pid",pid);
                startActivity(intent);
            }
        });
        getData(pid);
    }

    public void getData(int pid) {
        new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(BASE_URL)
                .build()
                .create(UserService.class)
                .getProductsDetails(pid)
                .enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                        // Log.e("hello",BASE_URL);
                        JsonArray array = response.body().getAsJsonArray("data");
                        JsonObject object;
                        Log.e("product", String.valueOf(response.body().getAsJsonArray("data")));
                        if (array.size() > 0) {
                            for (int i = 0; i < array.size(); i++) {

                                object = array.get(i).getAsJsonObject();
                              //  Product product = new Product();
                              // productList.add(product);
                                //product.setName(object.get("name").getAsString());
                                //product.setDescription(object.get("description").getAsString());
                              //  product.setPrice(object.get("price").getAsInt());
                               // Log.e("services",""+ product);

                                textName.setText("Name - "+object.get("name").getAsString());
                                textdescription.setText("description - "+object.get("description").getAsString());
                                textPrice.setText("Price - "+object.get("price").getAsString());
                            }

                        }

                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {

                    }
                });
    }
}
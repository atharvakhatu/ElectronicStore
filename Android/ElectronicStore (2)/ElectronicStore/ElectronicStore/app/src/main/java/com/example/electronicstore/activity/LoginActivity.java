package com.example.electronicstore.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.provider.SyncStateContract;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.electronicstore.R;
import com.example.electronicstore.backendservices.UserService;
import com.example.electronicstore.entity.User;
import com.example.electronicstore.utils.Constants;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class LoginActivity extends AppCompatActivity {
    EditText editEmail, editPassword;
    TextView txt_signUp;
    Button btnLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);

        txt_signUp = findViewById(R.id.txt_signUp);


        txt_signUp.setOnClickListener(v -> {

            Intent intent = new Intent(getApplicationContext(), RegistrationActivity.class);
            startActivity(intent);

        });
        btnLogin = findViewById(R.id.btnLogin);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                signin();
            }
        });
    }

    public void signin() {

        User user = validateData();
        if (user != null)
            signinUser(user);
    }

    private void signinUser(User user) {
        new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(Constants.BASE_URL)
                .build()
                .create(UserService.class)
                .login(user)
                .enqueue(new Callback<JsonObject>() {

                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {

                      //  JsonObject jsonObject1 = response.body().getAsJsonObject();
//                        Log.e("e",""+jsonObject1.get("data").getAsJsonObject().get("name"));
                        //Toast.makeText(LoginActivity.this, "array length = " + jsonArray.size(), Toast.LENGTH_SHORT).show();

                        //Log.e("e",""+jsonObject1.get("data").getAsJsonObject().get("c_id"));

                    //    int id = jsonObject1.get("data").getAsJsonObject().get("c_id").getAsInt();
//                            Toast.makeText(Login.this, "user id = " + id, Toast.LENGTH_SHORT).show();
//                            //add the userid inside the shared preferences
                     //   saveData(id);
                        startActivity(new Intent(LoginActivity.this, DashboardActivity.class));
                        finish();
                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {
                        Toast.makeText(LoginActivity.this, "Response failed", Toast.LENGTH_SHORT).show();

                    }
                });
    }

    private void saveData(int id) {
        SharedPreferences preferences = getSharedPreferences("Project", MODE_PRIVATE);
        preferences.edit().putInt("c_id", id).commit();

    }

    public User validateData() {
        User user = new User();
        user.setEmail(editEmail.getText().toString());
        user.setPassword(editPassword.getText().toString());

        if (!user.getEmail().equals(""))
            if (!user.getPassword().equals(""))
                return user;
            else
                Toast.makeText(this, "Password cannot be empty", Toast.LENGTH_SHORT).show();
        else
            Toast.makeText(this, "Email cannot be empty", Toast.LENGTH_SHORT).show();
        return null;
    }
}



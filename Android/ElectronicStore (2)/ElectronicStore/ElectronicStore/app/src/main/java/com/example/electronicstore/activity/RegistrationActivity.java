package com.example.electronicstore.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.example.electronicstore.R;
import com.example.electronicstore.backendservices.UserService;
import com.example.electronicstore.entity.User;
import com.example.electronicstore.utils.Constants;
import com.google.gson.JsonObject;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RegistrationActivity extends AppCompatActivity {
    EditText txt_fullName,txt_Birthday,txt_Phone,txt_Address,txt_Email,txt_ConfirmEmail,txt_Password,txt_ConfirmPassword;
    Button btn_finish;
    final Calendar myCalendar= Calendar.getInstance();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);

        txt_fullName = findViewById(R.id.txt_fullName);

        txt_Phone = findViewById(R.id.txt_Phone);
        txt_Address = findViewById(R.id.txt_Address);
        txt_Email = findViewById(R.id.txt_Email);
        txt_ConfirmEmail = findViewById(R.id.txt_ConfirmEmail);
        txt_Password = findViewById(R.id.txt_Password);
        txt_ConfirmPassword = findViewById(R.id.txt_ConfirmPassword);


        btn_finish = findViewById(R.id.btn_finish);
        btn_finish.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                signup();

            }
        });
    }

    public void signup() {
        User user = validateData();
        if(user!=null)
            registerUser(user);

    }

    private void registerUser(User user)
    {
        Object ConstantsURL;
        new Retrofit.Builder() // Creating new Retrofit Builder object
                .addConverterFactory(GsonConverterFactory.create()) //Adding the convertor
                .baseUrl(Constants.BASE_URL) //Adding the base url
                .build() // creating the retrofit object
                .create(UserService.class)
                .register(user)
                .enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                        Toast.makeText(RegistrationActivity.this, "User Registered Successfully", Toast.LENGTH_SHORT).show();
                        finish();
                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {
                        Toast.makeText(RegistrationActivity.this, "haha.. You failed", Toast.LENGTH_SHORT).show();
                    }
                });
    }

    private void updateLabel(){
        String myFormat="yyyy-MM-dd";
        SimpleDateFormat dateFormat=new SimpleDateFormat(myFormat, Locale.US);
        txt_Birthday.setText(dateFormat.format(myCalendar.getTime()));
    }


    public User validateData()
    {
        User register = new User();
        register.setName(txt_fullName.getText().toString());
        register.setPhone(Long.parseLong(txt_Phone.getText().toString()));
        register.setAddress(txt_Address.getText().toString());
        register.setEmail(txt_Email.getText().toString());
        register.setPassword(txt_Password.getText().toString());


        String confirmPassword = txt_ConfirmPassword.getText().toString();
        if (!register.getName().equals("")) {
            if (!register.getEmail().equals("")) {
                if (!register.getPassword().equals("")) {
                    if (register.getPassword().equals(confirmPassword)) {
                        return register;
                    } else
                        Toast.makeText(this, "Passwords does not match", Toast.LENGTH_SHORT).show();
                } else
                    Toast.makeText(this, "Password cannot be empty", Toast.LENGTH_SHORT).show();
            } else
                Toast.makeText(this, "Email cannot be empty", Toast.LENGTH_SHORT).show();
        } else
            Toast.makeText(this, "Name cannot be empty", Toast.LENGTH_SHORT).show();
        return  null;
    }
}
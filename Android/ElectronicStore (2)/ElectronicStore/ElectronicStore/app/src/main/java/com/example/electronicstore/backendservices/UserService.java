package com.example.electronicstore.backendservices;

import com.example.electronicstore.entity.Services;
import com.example.electronicstore.entity.User;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;


public interface UserService {

    @POST("login")
    public  Call<JsonObject> login(@Body User user);

    @POST("register")
    public Call<JsonObject> register(@Body User player);

    @GET("getAllServices")
    public  Call<JsonObject> getAllServices();

    @GET("getAllCategory")
    public Call<JsonObject> getAllCategory();

    @GET("/getProducts/{t_id}")
    public Call<JsonObject> getProducts(@Path("t_id") int t_id);

    @GET("/getProductsDetails/{p_id}")
    public Call<JsonObject> getProductsDetails(@Path("p_id") int p_id);

    @GET("/getAllCartCustomer/{c_id}")
    public Call<JsonObject> getAllCartCustomer(@Path("c_id") int c_id);


}

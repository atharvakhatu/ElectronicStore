package com.example.electronicstore.fragment;

import static com.example.electronicstore.utils.Constants.BASE_URL;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.example.electronicstore.R;
import com.example.electronicstore.adapter.CategoryListAdapter;
import com.example.electronicstore.adapter.ServiceListAdapter;
import com.example.electronicstore.backendservices.UserService;
import com.example.electronicstore.entity.Category;
import com.example.electronicstore.entity.Services;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class SearchFragment extends Fragment {
    RecyclerView recyclerView;
    CategoryListAdapter categoryListAdapter;
    List<Category> categoryList;
    int t_id;

    public SearchFragment() {

    }



    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View root = inflater.inflate(R.layout.fragment_search, container, false);

        return root;

    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);


        recyclerView = view.findViewById(R.id.recyclerView);
        categoryList = new ArrayList<>();
        categoryListAdapter = new CategoryListAdapter(getContext(), categoryList);
        recyclerView.setAdapter(categoryListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(getContext(),1));


        getData();
    }

    public void getData() {
       // Toast.makeText(getContext(), "called", Toast.LENGTH_SHORT).show();
        new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(BASE_URL)
                .build()
                .create(UserService.class)
                .getAllCategory()
                .enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                        // Log.e("hello",BASE_URL);
                        JsonArray array = response.body().getAsJsonArray("data");
                        JsonObject object;
                        if (array.size() > 0) {
                            for (int i = 0; i < array.size(); i++) {

                                object = array.get(i).getAsJsonObject();
                                Category category = new Category();
                                category.setName(object.get("name").getAsString());


                                categoryList.add(category);
                                Log.e("services", "" + category);
                            }
                            categoryListAdapter.notifyDataSetChanged();
                        }

                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {

                    }
                });


    }
}
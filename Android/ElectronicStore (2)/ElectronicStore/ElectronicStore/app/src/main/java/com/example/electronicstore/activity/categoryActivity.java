package com.example.electronicstore.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.os.Bundle;

import com.example.electronicstore.R;
import com.example.electronicstore.adapter.CategoryListAdapter;
import com.example.electronicstore.entity.Category;

import java.util.ArrayList;
import java.util.List;

public class categoryActivity extends AppCompatActivity {
    RecyclerView recyclerView;
    CategoryListAdapter categoryListAdapter;
    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        recyclerView = findViewById(R.id.recyclerView);


        ArrayList<String> categoryList = new ArrayList<>();
        categoryList.add("TV");
        categoryList.add("Fridge");
        categoryList.add("Washing Machine");
        categoryList.add("Mobile");
        categoryList.add("Oven");

//        recyclerView.setLayoutManager(new LinearLayoutManager(this));
//        categoryListAdapter= new CategoryListAdapter(this,categoryList);
//        recyclerView.setAdapter(categoryListAdapter);
//
//
//
//        recyclerView.setAdapter(categoryListAdapter);
//        recyclerView.setLayoutManager(new GridLayoutManager(this,1));


    }
}
package com.example.electronicstore.fragment;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import com.example.electronicstore.AboutActivity;
import com.example.electronicstore.ConditionTActivity;
import com.example.electronicstore.R;
import com.example.electronicstore.activity.DetailsActivity;
import com.example.electronicstore.activity.LoginActivity;
import com.example.electronicstore.activity.cartActivity;


public class ProfileFragment extends Fragment {
    Button btnLogout,btnAbout,btnTerms;
    public ProfileFragment() {

    }

    public static ProfileFragment newInstance(String param1, String param2) {
        ProfileFragment fragment = new ProfileFragment();
        Bundle args = new Bundle();

        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @SuppressLint("MissingInflatedId")
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_profile, container, false);

        btnAbout = root.findViewById(R.id.btnAbout);
        btnAbout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(getContext(), AboutActivity.class);
                startActivity(intent);
            }
        });

        btnTerms =root.findViewById(R.id.btnTerms);
        btnTerms.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
              Intent intent = new Intent(getContext(), ConditionTActivity.class);
              startActivity(intent);
            }
        });

        btnLogout=root.findViewById(R.id.btnLogout);
        btnLogout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent=new Intent(getContext(), LoginActivity.class);
                startActivity(intent);
            }
        });
        return root;
    }
}
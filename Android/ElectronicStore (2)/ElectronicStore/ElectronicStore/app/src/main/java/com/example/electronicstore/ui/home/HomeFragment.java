package com.example.electronicstore.ui.home;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

import com.example.electronicstore.R;
import com.example.electronicstore.activity.DetailsActivity;
import com.example.electronicstore.databinding.FragmentHomeBinding;

public class HomeFragment extends Fragment {
    Button btnTv,btnAc,btn1,btn2,btn3,btn4,btn5;
    ImageView imgView1,imgView2,imgView3,imgView4;

    private FragmentHomeBinding binding;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        HomeViewModel homeViewModel =
                new ViewModelProvider(this).get(HomeViewModel.class);

        binding = FragmentHomeBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
         imgView1 = root.findViewById(R.id.imgView1);
      //  imgView1 = root.findViewById(R.id.imgView1);

//        imgView1.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                Intent intent=new Intent(getContext(), DetailsActivity.class);
//                getContext().startActivity(intent);
//            }
//        });

       // final TextView textView = binding.textHome;
       // homeViewModel.getText().observe(getViewLifecycleOwner(), textView::setText);
        return root;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

    public void btnTv(View view){

    }

    public void btnAc(View view){

    }

    public void btn1(View view){

    }

    public void btn2(View view){

    }

    public void btn3(View view){

    }
    public void btn4(View view){

    }
    public void btn5(View view){

    }



}
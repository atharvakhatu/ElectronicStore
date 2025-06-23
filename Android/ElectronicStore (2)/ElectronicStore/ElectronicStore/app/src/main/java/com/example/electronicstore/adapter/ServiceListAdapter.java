package com.example.electronicstore.adapter;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.electronicstore.R;
import com.example.electronicstore.activity.DetailsActivity;
import com.example.electronicstore.entity.Services;

import java.util.List;

public class ServiceListAdapter extends RecyclerView.Adapter<ServiceListAdapter.MyViewHolder> {
     List<Services> mData;
    Context context;

    // data is passed into the constructor
    public ServiceListAdapter(Context context, List<Services> data) {
        this.mData = data;
        this.context = context;
    }

    // inflates the row layout from xml when needed
    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.service_list, null);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ServiceListAdapter.MyViewHolder holder, int position) {
        Services services = mData.get(position);
        holder.textName.setText(""+services.getName());
        holder.textAddress.setText(""+services.getAddress());
        holder.textPhone.setText(""+services.getPhone());
    }



    // total number of rows
    @Override
    public int getItemCount() {
        return mData.size();
    }


    // stores and recycles views as they are scrolled off screen
    public class MyViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        TextView textName,textAddress,textPhone;


        MyViewHolder(View itemView) {
            super(itemView);
            textName = itemView.findViewById(R.id.textName);
            textAddress = itemView.findViewById(R.id.textAddress);
            textPhone = itemView.findViewById(R.id.textPhone);
            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View view)
        {

        }
    }


}

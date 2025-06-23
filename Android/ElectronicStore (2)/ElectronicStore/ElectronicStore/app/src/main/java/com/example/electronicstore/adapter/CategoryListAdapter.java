package com.example.electronicstore.adapter;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.example.electronicstore.ProductActivity;
import com.example.electronicstore.R;
import com.example.electronicstore.entity.Category;

import java.util.List;

public class CategoryListAdapter extends RecyclerView.Adapter<CategoryListAdapter.MyViewHolder> {
     List<Category> mData;

     ItemClickListener mClickListener;
     Context context;
     int t_id;
    // data is passed into the constructor
    public CategoryListAdapter(Context context, List<Category> categoryList) {
        this.mData = categoryList;
        this.context = context;

    }


    // inflates the row layout from xml when needed
    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.categories_list, null);
        return new MyViewHolder(view);
    }

    // binds the data to the TextView in each row
    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        Category category = mData.get(position);
        holder.textView.setText(""+category.getName());
        t_id = mData.get(position).getT_id();

        Log.e("t_id",""+ t_id);
    }

    // total number of rows
    @Override
    public int getItemCount() {
        return mData.size();
    }


    // stores and recycles views as they are scrolled off screen
    public class MyViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        TextView textView;

        MyViewHolder(View itemView) {
            super(itemView);
            textView = itemView.findViewById(R.id.textView);
            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View view)
        {
            Log.e("myApp", "no network");
            int pos=getAdapterPosition();
            Intent intent=new Intent(context, ProductActivity.class);
            intent.putExtra("t_id",mData.get(getAdapterPosition()).getT_id());
            context.startActivity(intent);

        }
    }



    // allows clicks events to be caught
    void setClickListener(ItemClickListener itemClickListener) {
        this.mClickListener = itemClickListener;
    }

    // parent activity will implement this method to respond to click events
    public interface ItemClickListener {
        void onItemClick(View view, int position);
    }
}
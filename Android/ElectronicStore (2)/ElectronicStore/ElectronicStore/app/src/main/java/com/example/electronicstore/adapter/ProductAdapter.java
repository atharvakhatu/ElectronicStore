package com.example.electronicstore.adapter;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.electronicstore.ProductActivity;
import com.example.electronicstore.R;
import com.example.electronicstore.activity.DetailsActivity;
import com.example.electronicstore.entity.Category;
import com.example.electronicstore.entity.Product;
import com.example.electronicstore.entity.Services;

import java.util.List;

public class ProductAdapter extends RecyclerView.Adapter<ProductAdapter.MyViewHolder> {
    List<Product> mData;
    Context context;
    int p_id;
    public ProductAdapter(List<Product> mData, Context context) {
        this.mData = mData;
        this.context = context;
    }

    @NonNull
    @Override
    public ProductAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.product_list, null);
        return new ProductAdapter.MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Product product = mData.get(position);
        holder.productname.setText(""+product.getName());

        p_id = mData.get(position).getP_id();    }



    @Override
    public int getItemCount() {
        return mData.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        LinearLayout productLayout;
        TextView productname;


        MyViewHolder(View itemView) {
            super(itemView);
            productLayout= itemView.findViewById(R.id.productLayout);
            productname = itemView.findViewById(R.id.productname);


            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View view)
        {
            Log.e("MDATA", "mdata"+mData);
            Intent intent=new Intent(context, DetailsActivity.class);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.putExtra("pid",mData.get(getAdapterPosition()).getP_id());
            view.getContext().startActivity(intent);
        }
    }

}

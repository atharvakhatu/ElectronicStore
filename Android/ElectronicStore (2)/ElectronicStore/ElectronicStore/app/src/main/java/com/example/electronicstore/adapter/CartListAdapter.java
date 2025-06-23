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

import com.example.electronicstore.R;
import com.example.electronicstore.activity.DetailsActivity;
import com.example.electronicstore.activity.paymentActivity;
import com.example.electronicstore.entity.Product;

import java.util.List;

public class CartListAdapter extends RecyclerView.Adapter<CartListAdapter.MyViewHolder> {
    List<Product> mData;
    Context context;
    int p_id;

    public CartListAdapter(List<Product> mData, Context context) {
        this.mData = mData;
        this.context = context;
    }

    @NonNull
    @Override
    public CartListAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.cart_listlayout, null);

        return new CartListAdapter.MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull CartListAdapter.MyViewHolder holder, int position) {
        Product product = mData.get(position);
        holder.productname.setText(""+product.getName());
        p_id = mData.get(position).getP_id();
    }

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
        public void onClick(View view) {
            Log.e("MDATA", "mdata"+mData);
            Intent intent=new Intent(context, paymentActivity.class);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.putExtra("p_id",mData.get(getAdapterPosition()).getP_id());
            view.getContext().startActivity(intent);
        }

        }
    }

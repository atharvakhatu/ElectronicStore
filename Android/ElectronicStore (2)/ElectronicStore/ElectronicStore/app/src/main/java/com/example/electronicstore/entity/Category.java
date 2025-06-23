package com.example.electronicstore.entity;


public class Category
{
    private int t_id;
    private String name;

    public Category() {
    }

    public Category(int t_id, String name) {
        this.t_id = t_id;
        this.name = name;
    }

    public int getT_id() {
        return t_id;
    }

    public void setT_id(int t_id) {
        this.t_id = t_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Category{" +
                "t_id=" + t_id +
                ", name='" + name + '\'' +
                '}';
    }
}

package com.sevelli.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.sevelli.model.space.Blog;

@Repository
public class BlogDAO extends HBaseDAO<Blog>{

	public List<Blog> findList(Map<String, Object> params) {		
		return findList(Blog.class, params);
	}
	
}

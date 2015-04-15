package com.sevelli.service;

import javax.annotation.Resource;

import org.junit.Test;

import com.sevelli.model.portal.Papp;

import base.BaseTestCase;

public class TestPappService extends BaseTestCase{
	@Resource
	private PappService pappService;
	@Test
	public void testGet(){
		Papp papp = new Papp();
		papp.setMemberId(1L);
		papp.setTbid(1L);
//		Map map = ConverterUtil.toHashMap(papp);
		logger.debug("-----------------");
		Papp temp = pappService.get(papp);
		logger.debug(temp.getName());
	}
}

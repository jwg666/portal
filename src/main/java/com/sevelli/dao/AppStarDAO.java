/*
 * Powered By neusoft 
 * Since 2008 - 2013
 */

package com.sevelli.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.sevelli.model.portal.AppStar;



/**
 * database table: tb_app_star
 * database table comments: AppStar
 * 
 *
 * @author jiawg-贾伟光
 * @Email jiawg@sevelli.com
 *
 
 */
@Repository
public class AppStarDAO extends HBaseDAO<AppStar>{
		public List<AppStar> findList(Map<String, Object> params) {		
			return findList(AppStar.class, params);
		}	
}

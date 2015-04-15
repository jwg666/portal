/*
 * Powered By neusoft 
 * Since 2008 - 2013
 */

package com.sevelli.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.sevelli.model.portal.Pwallpaper;



/**
 * database table: tb_pwallpaper
 * database table comments: Pwallpaper
 * 
 *
 * @author jiawg-贾伟光
 * @Email jiawg@sevelli.com
 *
 
 */
@Repository
public class PwallpaperDAO extends HBaseDAO<Pwallpaper>{
		public List<Pwallpaper> findList(Map<String, Object> params) {		
			return findList(Pwallpaper.class, params);
		}	
}

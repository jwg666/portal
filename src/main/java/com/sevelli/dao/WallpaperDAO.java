/*
 * Powered By neusoft 
 * Since 2008 - 2013
 */

package com.sevelli.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.sevelli.model.portal.Wallpaper;



/**
 * database table: tb_wallpaper
 * database table comments: Wallpaper
 * 
 *
 * @author jiawg-贾伟光
 * @Email jiawg@sevelli.com
 *
 
 */
@Repository
public class WallpaperDAO extends HBaseDAO<Wallpaper>{
		public List<Wallpaper> findList(Map<String, Object> params) {		
			return findList(Wallpaper.class, params);
		}	
}

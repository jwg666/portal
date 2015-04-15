/*
 * Powered By neusoft 
 * Since 2008 - 2013
 */

package com.sevelli.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.sevelli.model.portal.Folder;



/**
 * database table: tb_folder
 * database table comments: Folder
 * 
 *
 * @author jiawg-贾伟光
 * @Email jiawg@sevelli.com
 *
 
 */
@Repository
public class FolderDAO extends HBaseDAO<Folder>{
		public List<Folder> findList(Map<String, Object> params) {		
			return findList(Folder.class, params);
		}	
}

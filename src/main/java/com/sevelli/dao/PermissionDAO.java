/*
 * Powered By neusoft 
 * Since 2008 - 2013
 */

package com.sevelli.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.sevelli.model.portal.Permission;



/**
 * database table: tb_permission
 * database table comments: Permission
 * 
 *
 * @author jiawg-贾伟光
 * @Email jiawg@sevelli.com
 *
 
 */
@Repository
public class PermissionDAO extends HBaseDAO<Permission>{
		public List<Permission> findList(Map<String, Object> params) {		
			return findList(Permission.class, params);
		}	
}

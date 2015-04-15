/*
 * Powered By neusoft 
 * Since 2008 - 2013
 */

package com.sevelli.model.portal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import com.sevelli.base.DateUtils;

@Entity
@Table(name = "tb_file")
public class File  implements java.io.Serializable{
	private static final long serialVersionUID = 5454155825314635342L;
	

	
    /**
     * tbid       db_column: tbid 
     */	
	private java.lang.Long tbid;
    /**
     * 图标地址       db_column: icon 
     */	
	private java.lang.String icon;
    /**
     * 文件名       db_column: name 
     */	
	private java.lang.String name;
    /**
     * 扩展名       db_column: ext 
     */	
	private java.lang.String ext;
    /**
     * 文件大小       db_column: size 
     */	
	private java.lang.Integer size;
    /**
     * 文件存放地址       db_column: url 
     */	
	private java.lang.String url;
    /**
     * memberId       db_column: member_id 
     */	
	private java.lang.Long memberId;
    /**
     * dt       db_column: dt 
     */	
	private java.util.Date dt;
	//columns END

	public File(){
	}

	public File(
		java.lang.Long tbid
	){
		this.tbid = tbid;
	}

		 /**
	     * tbid
	     * @return tbid
	     */
		@Id  
	    @GeneratedValue
		@Column(name="tbid")
		public java.lang.Long getTbid() {
			return this.tbid;
		}
	
	/**
     * tbid
     * @param tbid tbid
     */
	public void setTbid(java.lang.Long tbid) {
		this.tbid = tbid;
	}
		 /**
	     * 图标地址
	     * @return 图标地址
	     */
		@Column(name="icon")
		public java.lang.String getIcon() {
			return this.icon;
		}
	
	/**
     * 图标地址
     * @param icon 图标地址
     */
	public void setIcon(java.lang.String icon) {
		this.icon = icon;
	}
		 /**
	     * 文件名
	     * @return 文件名
	     */
		@Column(name="name")
		public java.lang.String getName() {
			return this.name;
		}
	
	/**
     * 文件名
     * @param name 文件名
     */
	public void setName(java.lang.String name) {
		this.name = name;
	}
		 /**
	     * 扩展名
	     * @return 扩展名
	     */
		@Column(name="ext")
		public java.lang.String getExt() {
			return this.ext;
		}
	
	/**
     * 扩展名
     * @param ext 扩展名
     */
	public void setExt(java.lang.String ext) {
		this.ext = ext;
	}
		 /**
	     * 文件大小
	     * @return 文件大小
	     */
		@Column(name="size")
		public java.lang.Integer getSize() {
			return this.size;
		}
	
	/**
     * 文件大小
     * @param size 文件大小
     */
	public void setSize(java.lang.Integer size) {
		this.size = size;
	}
		 /**
	     * 文件存放地址
	     * @return 文件存放地址
	     */
		@Column(name="url")
		public java.lang.String getUrl() {
			return this.url;
		}
	
	/**
     * 文件存放地址
     * @param url 文件存放地址
     */
	public void setUrl(java.lang.String url) {
		this.url = url;
	}
		 /**
	     * memberId
	     * @return memberId
	     */
		@Column(name="member_id")
		public java.lang.Long getMemberId() {
			return this.memberId;
		}
	
	/**
     * memberId
     * @param memberId memberId
     */
	public void setMemberId(java.lang.Long memberId) {
		this.memberId = memberId;
	}
	    /**
	     * dt
	     * @return dt
	     */
	public String getDtString() {
		//return DateConvertUtils.format(getDt(), FORMAT_DT);
		return  DateUtils.format(DateUtils.FORMAT3,getDt());
	}
	 /**
     * dt
     * @param dt dt
     */
	public void setDtString(String dt) {
		setDt(DateUtils.parse(dt,DateUtils.FORMAT3,java.util.Date.class));
	}
	
		 /**
	     * dt
	     * @return dt
	     */
		@Column(name="dt")
		public java.util.Date getDt() {
			return this.dt;
		}
	
	/**
     * dt
     * @param dt dt
     */
	public void setDt(java.util.Date dt) {
		this.dt = dt;
	}

	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
	
	public int hashCode() {
		return new HashCodeBuilder()
			.append(getTbid())
			.toHashCode();
	}
	
	public boolean equals(Object obj) {
		if(obj instanceof File == false) return false;
		if(this == obj) return true;
		File other = (File)obj;
		return new EqualsBuilder()
			.append(getTbid(),other.getTbid())
			.isEquals();
	}
}


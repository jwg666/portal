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

@Entity
@Table(name = "tb_app")
public class App  implements java.io.Serializable{
	private static final long serialVersionUID = 5454155825314635342L;
	

	
    /**
     * tbid       db_column: tbid 
     */	
	private java.lang.Long tbid;
    /**
     * 图标名称       db_column: name 
     */	
	private java.lang.String name;
    /**
     * 图标图片       db_column: icon 
     */	
	private java.lang.String icon;
    /**
     * 图标链接       db_column: url 
     */	
	private java.lang.String url;
    /**
     * 应用类型，参数有：app，widget       db_column: type 
     */	
	private java.lang.String type;
    /**
     * kindid       db_column: kindid 
     */	
	private java.lang.Integer kindid;
    /**
     * 窗口宽度       db_column: width 
     */	
	private java.lang.Integer width;
    /**
     * 窗口高度       db_column: height 
     */	
	private java.lang.Integer height;
    /**
     * 是否能对窗口进行拉伸       db_column: isresize 
     */	
	private java.lang.Boolean isresize;
    /**
     * 窗口是否有评分和介绍按钮       db_column: issetbar 
     */	
	private java.lang.Boolean issetbar;
    /**
     * 是否为flash应用       db_column: isflash 
     */	
	private java.lang.Boolean isflash;
    /**
     * remark       db_column: remark 
     */	
	private java.lang.String remark;
    /**
     * 使用人数       db_column: usecount 
     */	
	private java.lang.Long usecount;
    /**
     * 评分       db_column: starnum 
     */	
	private Double starnum;
    /**
     * dt       db_column: dt 
     */	
	private java.util.Date dt;
    /**
     * 排序       db_column: indexid 
     */	
	private java.lang.Long indexid;
    /**
     * dtString       db_column: dtString 
     */	
	private java.lang.String dtString;
    /**
     * isopenmax       db_column: isopenmax 
     */	
	private java.lang.Integer isopenmax;
	//columns END

	public App(){
	}

	public App(
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
	     * 图标名称
	     * @return 图标名称
	     */
		@Column(name="name")
		public java.lang.String getName() {
			return this.name;
		}
	
	/**
     * 图标名称
     * @param name 图标名称
     */
	public void setName(java.lang.String name) {
		this.name = name;
	}
		 /**
	     * 图标图片
	     * @return 图标图片
	     */
		@Column(name="icon")
		public java.lang.String getIcon() {
			return this.icon;
		}
	
	/**
     * 图标图片
     * @param icon 图标图片
     */
	public void setIcon(java.lang.String icon) {
		this.icon = icon;
	}
		 /**
	     * 图标链接
	     * @return 图标链接
	     */
		@Column(name="url")
		public java.lang.String getUrl() {
			return this.url;
		}
	
	/**
     * 图标链接
     * @param url 图标链接
     */
	public void setUrl(java.lang.String url) {
		this.url = url;
	}
		 /**
	     * 应用类型，参数有：app，widget
	     * @return 应用类型，参数有：app，widget
	     */
		@Column(name="type")
		public java.lang.String getType() {
			return this.type;
		}
	
	/**
     * 应用类型，参数有：app，widget
     * @param type 应用类型，参数有：app，widget
     */
	public void setType(java.lang.String type) {
		this.type = type;
	}
		 /**
	     * kindid
	     * @return kindid
	     */
		@Column(name="kindid")
		public java.lang.Integer getKindid() {
			return this.kindid;
		}
	
	/**
     * kindid
     * @param kindid kindid
     */
	public void setKindid(java.lang.Integer kindid) {
		this.kindid = kindid;
	}
		 /**
	     * 窗口宽度
	     * @return 窗口宽度
	     */
		@Column(name="width")
		public java.lang.Integer getWidth() {
			return this.width;
		}
	
	/**
     * 窗口宽度
     * @param width 窗口宽度
     */
	public void setWidth(java.lang.Integer width) {
		this.width = width;
	}
		 /**
	     * 窗口高度
	     * @return 窗口高度
	     */
		@Column(name="height")
		public java.lang.Integer getHeight() {
			return this.height;
		}
	
	/**
     * 窗口高度
     * @param height 窗口高度
     */
	public void setHeight(java.lang.Integer height) {
		this.height = height;
	}
		 /**
	     * 是否能对窗口进行拉伸
	     * @return 是否能对窗口进行拉伸
	     */
		@Column(name="isresize")
		public java.lang.Boolean getIsresize() {
			return this.isresize;
		}
	
	/**
     * 是否能对窗口进行拉伸
     * @param isresize 是否能对窗口进行拉伸
     */
	public void setIsresize(java.lang.Boolean isresize) {
		this.isresize = isresize;
	}
		 /**
	     * 窗口是否有评分和介绍按钮
	     * @return 窗口是否有评分和介绍按钮
	     */
		@Column(name="issetbar")
		public java.lang.Boolean getIssetbar() {
			return this.issetbar;
		}
	
	/**
     * 窗口是否有评分和介绍按钮
     * @param issetbar 窗口是否有评分和介绍按钮
     */
	public void setIssetbar(java.lang.Boolean issetbar) {
		this.issetbar = issetbar;
	}
		 /**
	     * 是否为flash应用
	     * @return 是否为flash应用
	     */
		@Column(name="isflash")
		public java.lang.Boolean getIsflash() {
			return this.isflash;
		}
	
	/**
     * 是否为flash应用
     * @param isflash 是否为flash应用
     */
	public void setIsflash(java.lang.Boolean isflash) {
		this.isflash = isflash;
	}
		 /**
	     * remark
	     * @return remark
	     */
		@Column(name="remark")
		public java.lang.String getRemark() {
			return this.remark;
		}
	
	/**
     * remark
     * @param remark remark
     */
	public void setRemark(java.lang.String remark) {
		this.remark = remark;
	}
		 /**
	     * 使用人数
	     * @return 使用人数
	     */
		@Column(name="usecount")
		public java.lang.Long getUsecount() {
			return this.usecount;
		}
	
	/**
     * 使用人数
     * @param usecount 使用人数
     */
	public void setUsecount(java.lang.Long usecount) {
		this.usecount = usecount;
	}
		 /**
	     * 评分
	     * @return 评分
	     */
		@Column(name="starnum")
		public Double getStarnum() {
			return this.starnum;
		}
	
	/**
     * 评分
     * @param starnum 评分
     */
	public void setStarnum(Double starnum) {
		this.starnum = starnum;
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
		 /**
	     * 排序
	     * @return 排序
	     */
		@Column(name="indexid")
		public java.lang.Long getIndexid() {
			return this.indexid;
		}
	
	/**
     * 排序
     * @param indexid 排序
     */
	public void setIndexid(java.lang.Long indexid) {
		this.indexid = indexid;
	}
		 /**
	     * dtString
	     * @return dtString
	     */
		@Column(name="dtString")
		public java.lang.String getDtString() {
			return this.dtString;
		}
	
	/**
     * dtString
     * @param dtString dtString
     */
	public void setDtString(java.lang.String dtString) {
		this.dtString = dtString;
	}
		 /**
	     * isopenmax
	     * @return isopenmax
	     */
		@Column(name="isopenmax")
		public java.lang.Integer getIsopenmax() {
			return this.isopenmax;
		}
	
	/**
     * isopenmax
     * @param isopenmax isopenmax
     */
	public void setIsopenmax(java.lang.Integer isopenmax) {
		this.isopenmax = isopenmax;
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
		if(obj instanceof App == false) return false;
		if(this == obj) return true;
		App other = (App)obj;
		return new EqualsBuilder()
			.append(getTbid(),other.getTbid())
			.isEquals();
	}
}


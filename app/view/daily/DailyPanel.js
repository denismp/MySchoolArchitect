/*
 * File: app/view/daily/DailyPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MySchool.view.daily.DailyPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.dailypanel',

	requires: [
		'MySchool.view.daily.DailyGridPanel',
		'MySchool.view.daily.DetailsTabPanel',
		'MySchool.view.daily.RefreshTool',
		'MySchool.view.daily.SearchTool',
		'MySchool.view.daily.NewTool',
		'MySchool.view.daily.SaveTool',
		'MySchool.view.daily.DeleteTool',
		'MySchool.view.daily.LockTool',
		'Ext.grid.Panel',
		'Ext.tab.Panel',
		'Ext.panel.Tool'
	],

	height: 673,
	itemId: 'dailydetailspanel',
	title: 'Daily Details',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'dailygridpanel',
					height: 334,
					dock: 'top'
				},
				{
					xtype: 'dailydetailstabpanel',
					dock: 'bottom'
				}
			],
			tools: [
				{
					xtype: 'dailyrefreshtool'
				},
				{
					xtype: 'dailysearchtool',
					disabled: true
				},
				{
					xtype: 'dailynewtool'
				},
				{
					xtype: 'dailysavetool'
				},
				{
					xtype: 'dailydeletetool',
					disabled: true
				},
				{
					xtype: 'dailylocktool',
					disabled: true
				}
			]
		});

		me.callParent(arguments);
	}

});
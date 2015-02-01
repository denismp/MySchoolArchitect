/*
 * File: app/view/monthly/evaluation/TabPanel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('MySchool.view.monthly.evaluation.TabPanel', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.monthlyevaluationtabpanel',

	requires: [
		'MySchool.view.common.MyTabPanel',
		'Ext.panel.Panel',
		'Ext.tab.Tab'
	],

	height: 300,
	itemId: 'monthlyevaluationdetailstabpanel',
	minHeight: 300,
	activeTab: 0,

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlyevaluationcommentstabpanel',
					title: 'Comments',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				}
			]
		});

		me.callParent(arguments);
	}

});
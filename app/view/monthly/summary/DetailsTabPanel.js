/*
 * File: app/view/monthly/summary/DetailsTabPanel.js
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

Ext.define('MySchool.view.monthly.summary.DetailsTabPanel', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.monthlysummarydetailstabpanel',

	requires: [
		'MySchool.view.common.MyTabPanel',
		'Ext.panel.Panel',
		'Ext.tab.Tab'
	],

	height: 300,
	itemId: 'monthlysummarydetailstabpanel',
	minHeight: 300,
	width: 1398,
	activeTab: 0,

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlyfeelingstabpanel',
					title: 'Feelings',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				},
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlyreflectionstabpanel',
					title: 'Reflections',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				},
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlypatternsofcorrectionstabpanel',
					title: 'Patterns Of Corrections',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				},
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlyeffectivenessofactionstabpanel',
					title: 'Effectivenes Of Actions',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				},
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlyactionresultstabpanel',
					title: 'Action Results',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				},
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlyrealizationstabpanel',
					title: 'Realizations',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				},
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlyplannedchangestabpanel',
					title: 'Planned Changes',
					tabConfig: {
						xtype: 'tab',
						tooltip: 'Click edit to modify'
					}
				},
				{
					xtype: 'commonmytabpanel',
					itemId: 'monthlycommentstabpanel',
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
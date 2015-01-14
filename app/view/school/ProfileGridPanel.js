/*
 * File: app/view/school/ProfileGridPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
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

Ext.define('MySchool.view.school.ProfileGridPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.schoolprofilegridpanel',

	requires: [
		'Ext.grid.column.Number',
		'Ext.form.field.ComboBox',
		'Ext.grid.column.CheckColumn',
		'Ext.grid.column.Date',
		'Ext.grid.View',
		'Ext.grid.plugin.CellEditing'
	],

	itemId: 'schoolprofilesgridpanel',
	maxHeight: 200,
	minHeight: 200,
	autoScroll: true,
	title: 'Schools',
	forceFit: true,
	store: 'school.SchoolProfileStore',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			columns: [
				{
					xtype: 'numbercolumn',
					hidden: true,
					dataIndex: 'id',
					text: 'id',
					format: '000000'
				},
				{
					xtype: 'numbercolumn',
					hidden: true,
					dataIndex: 'schoolviewId',
					text: 'schoolviewId',
					format: '000000'
				},
				{
					xtype: 'numbercolumn',
					hidden: true,
					dataIndex: 'schoolId',
					text: 'schoolId',
					format: '000000'
				},
				{
					xtype: 'numbercolumn',
					hidden: true,
					dataIndex: 'subjectId',
					text: 'subjId',
					format: '000000'
				},
				{
					xtype: 'numbercolumn',
					hidden: true,
					dataIndex: 'adminId',
					text: 'adminId',
					format: '000000'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'subjectName',
					text: 'Subj Name'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'name',
					text: 'School Name',
					editor: {
						xtype: 'combobox',
						name: 'name',
						displayField: 'name',
						store: 'subject.SchoolsStore',
						valueField: 'name'
					}
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'adminUserName',
					text: 'Admin User Name'
				},
				{
					xtype: 'checkcolumn',
					hidden: true,
					itemId: 'schoolprofilegridpanelenabled',
					dataIndex: 'enabled',
					text: 'Enabled?'
				},
				{
					xtype: 'numbercolumn',
					hidden: true,
					dataIndex: 'version',
					text: 'version',
					format: '000000'
				},
				{
					xtype: 'gridcolumn',
					hidden: true,
					dataIndex: 'whoUpdated',
					text: 'Who Updated'
				},
				{
					xtype: 'datecolumn',
					hidden: true,
					dataIndex: 'lastUpdated',
					text: 'Last Updated'
				},
				{
					xtype: 'datecolumn',
					hidden: true,
					dataIndex: 'createdDate',
					text: 'Created Date'
				}
			],
			plugins: [
				Ext.create('Ext.grid.plugin.CellEditing', {

				})
			]
		});

		me.callParent(arguments);
	}

});
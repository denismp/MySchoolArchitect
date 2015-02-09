/*
 * File: app/view/faculty/ProfileGridFacultyOnlyPanel.js
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

Ext.define('MySchool.view.faculty.ProfileGridFacultyOnlyPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.facultyprofilegridfacultyonlypanel',

	requires: [
		'Ext.grid.column.Number',
		'Ext.grid.column.CheckColumn',
		'Ext.grid.column.Date',
		'Ext.grid.View'
	],

	itemId: 'facultyonlygridpanel',
	maxHeight: 200,
	minHeight: 200,
	autoScroll: true,
	title: 'Faculty',
	forceFit: true,
	store: 'faculty.FacultyTableStore',

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
					dataIndex: 'facultyId',
					text: 'facultyId',
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
					dataIndex: 'facultyviewid',
					text: 'facultyviewid',
					format: '000000'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'userName',
					text: 'Faculty User Name'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'schoolName',
					text: 'School Name'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'firstName',
					text: 'First Name'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'middleName',
					text: 'Middle Name'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'lastName',
					text: 'Last Name'
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'email',
					text: 'Email'
				},
				{
					xtype: 'checkcolumn',
					hidden: true,
					itemId: 'facultyprofilegridpanelenabled',
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
					dataIndex: 'dob',
					text: 'dob'
				}
			]
		});

		me.callParent(arguments);
	}

});
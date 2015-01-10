/*
 * File: app/view/student/ProfilePanel.js
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

Ext.define('MySchool.view.student.ProfilePanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.studentprofilepanel',

	requires: [
		'MySchool.view.student.ProfileGridPanel',
		'MySchool.view.student.ProfileForm',
		'MySchool.view.student.ProfileRefreshTool',
		'MySchool.view.student.ProfileSearchTool',
		'MySchool.view.student.ProfileNewTool',
		'MySchool.view.student.ProfileSaveTool',
		'MySchool.view.student.ProfileDeleteTool',
		'MySchool.view.student.ProfileLockTool',
		'MySchool.view.student.PasswordTool',
		'Ext.grid.Panel',
		'Ext.form.Panel',
		'Ext.panel.Tool'
	],

	itemId: 'studentprofilebyfacultydetailspanel',
	layout: 'fit',
	title: 'Student Profile Details',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'studentprofilegridpanel',
					dock: 'top'
				},
				{
					xtype: 'studentprofileform',
					dock: 'bottom'
				}
			],
			tools: [
				{
					xtype: 'studentprofilerefreshtool'
				},
				{
					xtype: 'studentprofilesearchtool',
					disabled: true
				},
				{
					xtype: 'studentprofilenewtool'
				},
				{
					xtype: 'mytool3'
				},
				{
					xtype: 'studentprofiledeletetool'
				},
				{
					xtype: 'studentprofilelocktool'
				},
				{
					xtype: 'studentpasswordtool'
				}
			]
		});

		me.callParent(arguments);
	}

});
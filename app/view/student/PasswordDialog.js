/*
 * File: app/view/student/PasswordDialog.js
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

Ext.define('MySchool.view.student.PasswordDialog', {
	extend: 'Ext.window.Window',

	requires: [
		'Ext.form.Panel',
		'Ext.form.FieldContainer',
		'Ext.form.field.Text',
		'Ext.button.Button'
	],

	height: 203,
	width: 515,
	title: 'Student Password Dialog',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					height: 161,
					itemId: 'studentpasswordform',
					width: 523,
					bodyBorder: false,
					bodyPadding: 10,
					dockedItems: [
						{
							xtype: 'fieldcontainer',
							dock: 'top',
							height: 128,
							items: [
								{
									xtype: 'textfield',
									itemId: 'studentuserid',
									padding: 5,
									fieldLabel: 'User ID',
									labelWidth: 150,
									name: 'userName',
									size: 45
								},
								{
									xtype: 'textfield',
									itemId: 'studentnewpassword',
									padding: 5,
									fieldLabel: 'New Password',
									labelWidth: 150,
									name: 'userPassword',
									size: 45
								},
								{
									xtype: 'textfield',
									itemId: 'studentrepeatpassword',
									padding: 5,
									fieldLabel: 'Repeat New Password',
									labelWidth: 150,
									name: 'userRepeatPassword',
									size: 45
								}
							]
						},
						{
							xtype: 'container',
							dock: 'top',
							layout: {
								type: 'hbox',
								align: 'middle',
								pack: 'center'
							},
							items: [
								{
									xtype: 'button',
									itemId: 'studentpasswordcancelbutton',
									text: 'Cancel'
								},
								{
									xtype: 'button',
									itemId: 'studentpasswordsubmitbutton',
									text: 'Submit'
								}
							]
						}
					]
				}
			]
		});

		me.callParent(arguments);
	}

});
/*
 * File: app/view/student/ProfileForm.js
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

Ext.define('MySchool.view.student.ProfileForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.studentprofileform',

	requires: [
		'Ext.form.field.Date',
		'Ext.button.Button'
	],

	itemId: 'studentprofileform',
	maxHeight: 450,
	minHeight: 450,
	autoScroll: true,
	layout: 'absolute',
	bodyPadding: 10,
	collapseFirst: false,
	frameHeader: false,
	title: 'Student Profile Form',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'textfield',
					itemId: 'student-firstname',
					width: 300,
					fieldLabel: 'First Name',
					name: 'firstName'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 50,
					itemId: 'student-middlename',
					width: 300,
					fieldLabel: 'Middle Name',
					name: 'middleName'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 90,
					itemId: 'student-lastname',
					width: 300,
					fieldLabel: 'Last Name',
					name: 'lastName'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 130,
					itemId: 'student-phone1',
					fieldLabel: 'Phone1',
					name: 'phone1'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 170,
					itemId: 'student-phone',
					fieldLabel: 'Phone2',
					name: 'phone2'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 90,
					itemId: 'student-address1',
					width: 300,
					fieldLabel: 'Address1',
					name: 'address1'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 130,
					itemId: 'student-address2',
					width: 300,
					fieldLabel: 'Address2',
					name: 'address2'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 170,
					itemId: 'student-city',
					width: 300,
					fieldLabel: 'City',
					name: 'city'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 210,
					itemId: 'student-province',
					width: 300,
					fieldLabel: 'Province/State',
					name: 'province'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 250,
					itemId: 'student-postalcode',
					fieldLabel: 'Postal Code',
					name: 'postalCode'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 290,
					itemId: 'student-country',
					fieldLabel: 'Country',
					name: 'country'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 50,
					itemId: 'student-email',
					width: 300,
					fieldLabel: 'Email',
					name: 'email'
				},
				{
					xtype: 'datefield',
					x: 360,
					y: 10,
					itemId: 'student-dob',
					width: 300,
					fieldLabel: 'Date of birth',
					name: 'dob'
				},
				{
					xtype: 'button',
					x: 30,
					y: 350,
					itemId: 'studentprofileformeditbutton',
					text: 'Edit'
				},
				{
					xtype: 'button',
					x: 80,
					y: 350,
					disabled: true,
					itemId: 'studentprofileformcancelbutton',
					text: 'Cancel'
				},
				{
					xtype: 'button',
					x: 150,
					y: 350,
					disabled: true,
					itemId: 'studentprofileformsavebutton',
					text: 'Save'
				}
			]
		});

		me.callParent(arguments);
	}

});
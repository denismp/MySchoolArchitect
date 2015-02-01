/*
 * File: app/view/faculty/FacultyOnlyProfileForm.js
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

Ext.define('MySchool.view.faculty.FacultyOnlyProfileForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.facultyfacultyonlyprofileform',

	requires: [
		'Ext.form.field.Date',
		'Ext.button.Button'
	],

	itemId: 'facultyonlyprofileform',
	maxHeight: 450,
	minHeight: 450,
	autoScroll: true,
	layout: 'absolute',
	bodyPadding: 10,
	collapseFirst: false,
	frameHeader: false,
	title: 'Faculty Profile Form',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'textfield',
					itemId: 'faculty-firstname',
					width: 300,
					fieldLabel: 'First Name',
					name: 'firstName'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 50,
					itemId: 'faculty-middlename',
					width: 300,
					fieldLabel: 'Middle Name',
					name: 'middleName'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 90,
					itemId: 'faculty-lastname',
					width: 300,
					fieldLabel: 'Last Name',
					name: 'lastName'
				},
				{
					xtype: 'datefield',
					x: 360,
					y: 10,
					itemId: 'faculty-dob',
					width: 300,
					fieldLabel: 'DOB',
					name: 'dob'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 130,
					itemId: 'faculty-phone1',
					fieldLabel: 'Phone1',
					name: 'phone1'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 170,
					itemId: 'faculty-phone2',
					fieldLabel: 'Phone2',
					name: 'phone2'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 90,
					itemId: 'faculty-address1',
					width: 300,
					fieldLabel: 'Address1',
					name: 'address1'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 130,
					itemId: 'faculty-address2',
					width: 300,
					fieldLabel: 'Address2',
					name: 'address2'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 170,
					itemId: 'faculty-city',
					width: 300,
					fieldLabel: 'City',
					name: 'city'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 210,
					itemId: 'faculty-province',
					width: 300,
					fieldLabel: 'Province/State',
					name: 'province'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 250,
					itemId: 'faculty-postalcode',
					fieldLabel: 'Postal Code',
					name: 'postalCode'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 290,
					itemId: 'faculty-country',
					fieldLabel: 'Country',
					name: 'country'
				},
				{
					xtype: 'textfield',
					x: 360,
					y: 50,
					itemId: 'faculty-email',
					width: 300,
					fieldLabel: 'Email',
					name: 'email'
				},
				{
					xtype: 'button',
					x: 30,
					y: 350,
					itemId: 'onlyfacultyprofileformeditbutton',
					text: 'Edit'
				},
				{
					xtype: 'button',
					x: 80,
					y: 350,
					disabled: true,
					itemId: 'onlyfacultyprofileformcanelbutton',
					text: 'Cancel'
				},
				{
					xtype: 'button',
					x: 150,
					y: 350,
					disabled: true,
					itemId: 'onlyfacultyprofileformsavebutton',
					text: 'Save'
				}
			]
		});

		me.callParent(arguments);
	}

});
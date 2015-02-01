/*
 * File: app/view/school/ProfileForm.js
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

Ext.define('MySchool.view.school.ProfileForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.schoolprofileform',

	requires: [
		'Ext.form.field.TextArea',
		'Ext.button.Button'
	],

	itemId: 'schoolprofileform',
	maxHeight: 450,
	minHeight: 450,
	autoScroll: true,
	layout: 'absolute',
	bodyPadding: 10,
	collapseFirst: false,
	frameHeader: false,
	title: 'School Profile Form',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'textfield',
					itemId: 'school-name',
					width: 300,
					fieldLabel: 'School Name',
					name: 'name'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 40,
					itemId: 'school-phone1',
					fieldLabel: 'Phone1',
					name: 'phone1'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 70,
					itemId: 'school-phone2',
					fieldLabel: 'Phone2',
					name: 'phone2'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 100,
					itemId: 'school-address1',
					width: 300,
					fieldLabel: 'Address1',
					name: 'address1'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 130,
					itemId: 'school-address2',
					width: 300,
					fieldLabel: 'Address2',
					name: 'address2'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 160,
					itemId: 'school-city',
					width: 300,
					fieldLabel: 'City',
					name: 'city'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 190,
					itemId: 'school-province',
					width: 300,
					fieldLabel: 'Province/State',
					name: 'province'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 220,
					itemId: 'school-postalcode',
					fieldLabel: 'Postal Code',
					name: 'postalCode'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 250,
					itemId: 'school-country',
					fieldLabel: 'Country',
					name: 'country'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 280,
					itemId: 'school-email',
					width: 300,
					fieldLabel: 'Email',
					name: 'email'
				},
				{
					xtype: 'textfield',
					x: 10,
					y: 310,
					itemId: 'school-district',
					width: 300,
					fieldLabel: 'District',
					name: 'district'
				},
				{
					xtype: 'textfield',
					x: 350,
					y: 10,
					itemId: 'school-custodianofrecords',
					width: 350,
					fieldLabel: 'Custodian Of Records',
					labelWidth: 150,
					name: 'custodianOfRecords'
				},
				{
					xtype: 'textfield',
					x: 400,
					y: 40,
					itemId: 'school-custodiantitle',
					width: 300,
					fieldLabel: 'Custodian Title',
					name: 'custodianTitle'
				},
				{
					xtype: 'textareafield',
					x: 400,
					y: 100,
					height: 203,
					itemId: 'school-comments',
					width: 410,
					fieldLabel: 'Comments',
					name: 'comments'
				},
				{
					xtype: 'button',
					x: 30,
					y: 350,
					itemId: 'schoolprofileformeditbutton',
					text: 'Edit'
				},
				{
					xtype: 'button',
					x: 80,
					y: 350,
					disabled: true,
					itemId: 'schoolprofileformcanelbutton',
					text: 'Cancel'
				},
				{
					xtype: 'button',
					x: 150,
					y: 350,
					disabled: true,
					itemId: 'schoolprofileformsavebutton',
					text: 'Save'
				}
			]
		});

		me.callParent(arguments);
	}

});
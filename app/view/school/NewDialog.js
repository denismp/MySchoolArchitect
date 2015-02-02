/*
 * File: app/view/school/NewDialog.js
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

Ext.define('MySchool.view.school.NewDialog', {
	extend: 'Ext.window.Window',

	requires: [
		'Ext.form.Panel',
		'Ext.form.FieldSet',
		'Ext.form.field.ComboBox',
		'Ext.button.Button'
	],

	height: 607,
	itemId: 'schoolnewdialog',
	width: 390,
	title: 'New School',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'form',
					dock: 'top',
					height: 534,
					itemId: 'schoolnewform',
					width: 390,
					bodyPadding: 10,
					dockedItems: [
						{
							xtype: 'fieldset',
							dock: 'top',
							height: 485,
							itemId: 'schoolnewformfieldset',
							padding: 5,
							items: [
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_name',
									fieldLabel: 'School Name',
									name: 'name'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_custodianofrecords',
									fieldLabel: 'Custodian Of Records',
									name: 'custodianOfRecords'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_custodiantitle',
									fieldLabel: 'Custodian Title',
									name: 'custodianTitle'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_district',
									fieldLabel: 'District',
									name: 'district'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_phone1',
									fieldLabel: 'Phone1',
									name: 'phone1'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_phone2',
									fieldLabel: 'Phone2',
									name: 'phone2'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_address1',
									fieldLabel: 'Address1',
									name: 'address1'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_address2',
									fieldLabel: 'Address2',
									name: 'address2'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_city',
									fieldLabel: 'City',
									name: 'city'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_province',
									fieldLabel: 'State/Province',
									name: 'province'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_postalcode',
									fieldLabel: 'Postal Code',
									name: 'postalcode'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_country',
									fieldLabel: 'Country',
									name: 'country'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_email',
									fieldLabel: 'Email',
									name: 'email'
								},
								{
									xtype: 'textfield',
									anchor: '100%',
									itemId: 'schoolnewform_comments',
									fieldLabel: 'Comments',
									name: 'comments'
								},
								{
									xtype: 'combobox',
									anchor: '100%',
									itemId: 'schoolnewform_adminusername',
									fieldLabel: 'Admin User Name',
									name: 'adminUserName',
									emptyText: 'Select one.',
									displayField: 'userName',
									forceSelection: true,
									store: 'admin.AdminStore',
									valueField: 'userName'
								}
							]
						}
					],
					items: [
						{
							xtype: 'button',
							itemId: 'schoolcancel',
							text: 'Cancel'
						},
						{
							xtype: 'button',
							itemId: 'schoolsubmit',
							text: 'Submit'
						}
					]
				}
			]
		});

		me.callParent(arguments);
	}

});
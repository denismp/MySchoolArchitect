/*
 * File: app/view/subject/NewForm.js
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

Ext.define('MySchool.view.subject.NewForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.newsubjectform',

	requires: [
		'MySchool.view.subject.SubjectNameComboBox',
		'MySchool.view.subject.QuarterNamesComboBox',
		'MySchool.view.subject.QuarterYearComboBox',
		'MySchool.view.subject.GradeTypeComboBox',
		'MySchool.view.subject.FacultyNamesComboBox',
		'Ext.form.FieldSet',
		'Ext.form.field.ComboBox',
		'Ext.form.field.Number',
		'Ext.form.field.TextArea',
		'Ext.button.Button'
	],

	draggable: true,
	floating: true,
	frame: true,
	itemId: 'newsubjectform',
	width: 500,
	title: 'New Subject Quarter for Student',
	jsonSubmit: true,

	initComponent: function() {
		var me = this;

		me.initialConfig = Ext.apply({
			jsonSubmit: true
		}, me.initialConfig);

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'fieldset',
					title: 'My Fields',
					items: [
						{
							xtype: 'textfield',
							anchor: '100%',
							itemId: 'newsubjectform-studentName',
							fieldLabel: 'Student User Name',
							name: 'studentName',
							readOnly: true
						},
						{
							xtype: 'textfield',
							anchor: '100%',
							hidden: true,
							itemId: 'newsubjectform-subjName',
							fieldLabel: 'Subject Name',
							name: 'subjName',
							allowOnlyWhitespace: false
						},
						{
							xtype: 'subjectnamecombobox',
							editable: false,
							anchor: '100%'
						},
						{
							xtype: 'numberfield',
							anchor: '100%',
							disabled: true,
							itemId: 'newsubjectform-subjGradeLevel',
							fieldLabel: 'Grade Level',
							name: 'subjGradeLevel',
							allowBlank: false,
							maxValue: 4,
							minValue: 0
						},
						{
							xtype: 'numberfield',
							anchor: '100%',
							disabled: true,
							itemId: 'newsubjectform-subjCreditHours',
							fieldLabel: 'Credit Hours',
							name: 'subjCreditHours',
							allowBlank: false,
							maxValue: 4,
							minValue: 0
						},
						{
							xtype: 'textareafield',
							anchor: '100%',
							disabled: true,
							itemId: 'newsubjectform-subjDescription',
							fieldLabel: 'Description',
							name: 'subjDescription',
							allowOnlyWhitespace: false
						},
						{
							xtype: 'textareafield',
							anchor: '100%',
							disabled: true,
							itemId: 'newsubjectform-subjObjectives',
							fieldLabel: 'Objectives',
							name: 'subjObjectives',
							allowOnlyWhitespace: false
						},
						{
							xtype: 'quarternamescombobox',
							editable: false,
							anchor: '100%'
						},
						{
							xtype: 'quarteryearcombobox',
							editable: false,
							anchor: '100%'
						},
						{
							xtype: 'gradetypecombobox',
							editable: false,
							anchor: '100%'
						},
						{
							xtype: 'subjectfacultynamescombobox',
							anchor: '100%'
						}
					]
				},
				{
					xtype: 'button',
					itemId: 'newsubjectcancel',
					text: 'Cancel'
				},
				{
					xtype: 'button',
					itemId: 'newsubjectedit',
					text: 'Edit Subject'
				},
				{
					xtype: 'button',
					itemId: 'newsubjectcreate',
					text: 'Create Subject'
				},
				{
					xtype: 'button',
					itemId: 'newsubjectsubmit',
					text: 'Create Quarter'
				}
			]
		});

		me.callParent(arguments);
	}

});
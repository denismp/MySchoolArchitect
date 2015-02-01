/*
 * File: app/view/weekly/evaluations/NewForm.js
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

Ext.define('MySchool.view.weekly.evaluations.NewForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.weeklyevaluationsnewform',

	requires: [
		'MySchool.view.common.QuarterSubjectComboBox',
		'MySchool.view.common.MonthComboBox',
		'Ext.form.FieldSet',
		'Ext.form.field.ComboBox',
		'Ext.form.field.Number',
		'Ext.form.field.Hidden',
		'Ext.button.Button'
	],

	draggable: true,
	floating: true,
	frame: true,
	itemId: 'weeklyevaluatiionsnewformpanel',
	width: 500,
	bodyPadding: 10,
	title: 'New Weekly Evaluations Form',

	initComponent: function() {
		var me = this;

		Ext.applyIf(me, {
			items: [
				{
					xtype: 'fieldset',
					itemId: 'evaluationsfieldset',
					title: 'Evaluations Fields',
					items: [
						{
							xtype: 'textfield',
							anchor: '100%',
							itemId: 'evaluation-studentname',
							fieldLabel: 'studentname',
							name: 'studentUserName',
							readOnly: true
						},
						{
							xtype: 'commonquartersubjectcombobox',
							anchor: '100%'
						},
						{
							xtype: 'commonmonthcombobox',
							anchor: '100%'
						},
						{
							xtype: 'numberfield',
							anchor: '100%',
							itemId: 'evaluation-week_number',
							fieldLabel: 'Week Number',
							name: 'week_number',
							maxValue: 5,
							minValue: 1
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-motivation',
							fieldLabel: 'motivation',
							name: 'motivation',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-organization',
							fieldLabel: 'organization',
							name: 'organization',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-effetiveuseofstudytime',
							fieldLabel: 'effectiveUseOfStudyTime',
							name: 'effectiveUseOfStudyTime',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-qualityofwork',
							fieldLabel: 'qualityOfWork',
							name: 'qualityOfWork',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-accuracyofwork',
							fieldLabel: 'accuracyOfWork',
							name: 'accuracyOfWork',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-complexityofwork',
							fieldLabel: 'complexityOfWork',
							name: 'complexityOfWork',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-growth',
							fieldLabel: 'growth',
							name: 'growth',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-consistency',
							fieldLabel: 'consistency',
							name: 'consistency',
							value: 5
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-comments',
							fieldLabel: 'comments',
							name: 'comments',
							value: 'comments'
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-subjectname',
							fieldLabel: 'subjectname',
							name: 'subjName'
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-quarter',
							fieldLabel: 'quarter',
							name: 'qtrName'
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-quarteryear',
							fieldLabel: 'year',
							name: 'qtrYear'
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-studentid',
							fieldLabel: 'studentid',
							name: 'studentId'
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-subjectid',
							fieldLabel: 'subjectId',
							name: 'subjId'
						},
						{
							xtype: 'hiddenfield',
							anchor: '100%',
							itemId: 'evaluation-quarterid',
							fieldLabel: 'quarterid',
							name: 'qtrId'
						}
					]
				},
				{
					xtype: 'button',
					itemId: 'evaluationcancel',
					text: 'Canel'
				},
				{
					xtype: 'button',
					itemId: 'evaluationsubmit',
					text: 'Submit'
				}
			]
		});

		me.callParent(arguments);
	}

});
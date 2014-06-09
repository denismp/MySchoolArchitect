/*
 * File: app/model/weekly/EvaluationsModel.js
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

Ext.define('MySchool.model.weekly.EvaluationsModel', {
	extend: 'Ext.data.Model',
	alias: 'model.weeklyevaluationsmodel',

	requires: [
		'Ext.data.Field'
	],

	fields: [
		{
			name: 'id'
		},
		{
			name: 'weeklyevaluationId',
			type: 'int'
		},
		{
			name: 'week_month',
			type: 'int'
		},
		{
			name: 'week_number',
			type: 'int'
		},
		{
			name: 'motivation',
			type: 'int'
		},
		{
			name: 'organization',
			type: 'int'
		},
		{
			name: 'effectiveUseOfStudyTime',
			type: 'int'
		},
		{
			name: 'qualityOfWork',
			type: 'int'
		},
		{
			name: 'accuracyOfWork',
			type: 'int'
		},
		{
			name: 'complexityOfWork',
			type: 'int'
		},
		{
			name: 'growth',
			type: 'int'
		},
		{
			name: 'consistency',
			type: 'int'
		},
		{
			name: 'comments',
			type: 'string'
		},
		{
			name: 'locked',
			type: 'boolean'
		},
		{
			dateFormat: 'm/d/Y',
			name: 'lastUpdated',
			type: 'date'
		},
		{
			name: 'whoUpdated',
			type: 'string'
		},
		{
			name: 'qtrId',
			type: 'int'
		},
		{
			name: 'qtrName',
			type: 'string'
		},
		{
			name: 'qtrYear',
			type: 'int'
		},
		{
			name: 'studentId',
			type: 'int'
		},
		{
			name: 'studentUserName',
			type: 'string'
		},
		{
			name: 'subjId',
			type: 'int'
		},
		{
			name: 'subjName',
			type: 'string'
		},
		{
			name: 'version',
			type: 'int'
		}
	]
});
/*
 * File: app/view/common/QuarterSubjectComboBox.js
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

Ext.define('MySchool.view.common.QuarterSubjectComboBox', {
	extend: 'Ext.form.field.ComboBox',
	alias: 'widget.commonquartersubjectcombobox',

	itemId: 'common-quartersubject',
	fieldLabel: 'Choose Quarter Subject',
	name: 'comboquartersubject',
	allowOnlyWhitespace: false,
	emptyText: 'Select one',
	forceSelection: true,
	queryMode: 'local',
	store: 'subject.SubjectStore',
	valueField: 'id',

	initComponent: function() {
		var me = this;

		me.processCommonQuarterSubjectComboBox(me);
		me.callParent(arguments);
	},

	processCommonQuarterSubjectComboBox: function(config) {
		config.tpl = Ext.create("Ext.XTemplate",
		                        '<tpl for="."><div class="x-boundlist-item">{qtrYear}/{qtrName} - {subjName}</div></tpl>');
		config.displayTpl = Ext.create("Ext.XTemplate",'<tpl for=".">{qtrYear}/{qtrName} - {subjName}</tpl>');
		return config;
	}

});
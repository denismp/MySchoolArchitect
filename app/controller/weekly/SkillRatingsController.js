/*
 * File: app/controller/weekly/SkillRatingsController.js
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

Ext.define('MySchool.controller.weekly.SkillRatingsController', {
	extend: 'Ext.app.Controller',
	alias: 'controller.weeklyskillratinscontroller',

	models: [
		'weekly.SkillRatingsModel'
	],
	stores: [
		'weekly.SkillRatingsStore'
	],

	refs: [
		{
			ref: 'WeeklySkillsCommentsTabPanel',
			selector: '#weeklyskillscommentstabpanel'
		},
		{
			ref: 'WeeklySkillsGridPanel',
			selector: '#weeklyskillsgridpanel'
		}
	],

	onWeeklyskillrefreshtoolClick: function(tool, e, eOpts) {
		var myStore = Ext.getStore('weekly.SkillRatingsStore');
		var myGrid = this.getWeeklySkillsGridPanel();
		myGrid.removeAll();
		myStore.reload();
	},

	onWeeklyskillssearchtoolClick: function(tool, e, eOpts) {

	},

	onWeeklyskillsnewtoolClick: function(tool, e, eOpts) {
		debugger;
		var studentStore				= Ext.getStore('student.StudentStore');
		//var subjectStore				= Ext.getStore('subject.SubjectStore');
		//var commonQuarterSubjectStore	= Ext.getStore( 'common.QuarterSubjectStore');
		var commonMonthStore			= Ext.getStore('common.MonthStore');
		var securityStore				= Ext.getStore('security.SecurityStore');
		var myGrid						= this.getWeeklySkillsGridPanel();
		var gridModel					= myGrid.getSelectionModel();
		var selectedRecord				= gridModel.getSelection()[0];
		var row							= myGrid.getStore().indexOf(selectedRecord);
		var securityRecord				= securityStore.getAt(0);
		this.userName					= securityRecord.get('userName');
		this.userRole					= securityRecord.get('userRole');
		var studentId;
		var studentName;

		if( this.userRole === 'ROLE_USER' )
			return;

		if( typeof selectedRecord !== 'undefined' )
		{
			//var studentRecord	= studentStore.getAt(row);
			studentId		= selectedRecord.get( 'studentId' );
			studentName		= selectedRecord.get( 'studentUserName' );
		}
		else
		{
			if( this.userRole === 'ROLE_USER' )
			{
				var studentRecord = studentStore.findRecord( 'userName', this.userName );
				studentId = studentRecord.get('studentId');
				studentName = this.userName;
			}
			else
			{
				studentId = 0;
				studentName = "Enter student user name";
			}
		}

		var newDialog = Ext.create( 'MySchool.view.weekly.skills.NewForm' );

		newDialog.down('#skills-studentid').setValue( studentId );
		newDialog.down('#skills-studentname').setValue( studentName );
		if( this.userRole !== 'ROLE_USER')
		{
			newDialog.down('#skills-studentname').setReadOnly( false );
		}
		else
		{
			newDialog.down('#skills-studentname').setReadOnly( true );
		}

		//commonQuarterSubjectStore.myLoad();
		commonMonthStore.myLoad();

		window.console.log( 'New Skills Dialog' );

		newDialog.render( Ext.getBody() );
		newDialog.show();
	},

	onWeeklytoolssavetoolClick: function(tool, e, eOpts) {
		window.console.log( "weekly.SkillRatingsStore.Save" );
		debugger;
		var mystore = Ext.getStore("weekly.SkillRatingsStore");

		if( this.userRole === 'ROLE_USER' )
		{
			mystore.reload();
			return;
		}



		var records = mystore.getModifiedRecords();
		for( var i = 0; i < records.length; i++ )
		{
		    records[i].set( 'lastUpdated', new Date() );
		    records[i].set( 'whoUpdated', 'login');
		}

		mystore.sync();
	},

	onWeeklyskillsdeletetoolClick: function(tool, e, eOpts) {

	},

	onWeeklyskillslocktoolClick: function(tool, e, eOpts) {

	},

	onWeeklyskillsgridpanelViewReady: function(tablepanel, eOpts) {
		debugger;
		console.log('onWeeklyskillsgridpanelViewReady()');
		var myStore = Ext.getStore('weekly.SkillRatingsStore');
		var myStudentStore = Ext.getStore('student.StudentStore');
		var securityStore = Ext.getStore( 'security.SecurityStore');
		var securityRecord = securityStore.getAt(0);
		var studentRecord = myStudentStore.getAt(0);
		this.userName = securityRecord.get('userName');
		this.userRole = securityRecord.get('userRole');
		var studentName_;
		var myGrid = this.getWeeklySkillsGridPanel();
		//        debugger
		if ( typeof( studentRecord ) != "undefined" )
		{
			if( this.userRole !== 'ROLE_USER')
			{
				studentName_ = this.userName + '/' + this.userRole;

				myGrid.setTitle('[' + studentName_ + ']');
				myStore.load({
					callback: this.onMyJsonStoreLoad,
					scope: this
				});

			}
			else
			{
				studentName_ = studentRecord.get('firstName') + " " + studentRecord.get('middleName') + ' ' + studentRecord.get('lastName');
				//MonthlyDetailsGridPanel
				//var myGrid = Ext.ComponentQuery.query("#bodiesofworkssubjectsgrid")[0];


				myGrid.setTitle('[' + studentName_ + ']');
				myStore.load({
					callback: this.onMyJsonStoreLoad,
					scope: this,
					params: {
						studentName: studentRecord.get('userName'),
						studentId: studentRecord.get('studentId')
					}
				});
			}
		}
		else
		{
			studentName_ = this.userName + '/' + this.userRole;
			myGrid.setTitle('[' + studentName_ + ']');
			myStore.load({
				callback: this.onMyJsonStoreLoad,
				studentName: this.userName,
				scope: this
			});
		}
		//grid.getSelectionModel().select( 0 );
		//tablepanel.getSelectionModel().select( 0 );
	},

	onWeeklyskillsgridpanelSelectionChange: function(model, selected, eOpts) {
		debugger;
		// in the onMyJsonStoreLoad we do a deselect so we need to test
		// if selected[0] has a value
		//weeklyevaluationdetailstabpanel
		if ( Ext.isDefined( selected  ) && Ext.isDefined( selected[0]  )) {
		    var tabPanel = this.getWeeklySkillsCommentsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'comments' );
		    //tabPanel = this.getDailyStudyDetailsTabPanel();
		    //    console.log( tabPanel );
		    //this.loadTabPanelForm( tabPanel, selected, 'studyDetails' );
		    //tabPanel = this.getDailyDetailsEvaluationTabPanel();
		    //    console.log( tabPanel );
		    //this.loadTabPanelForm( tabPanel, selected, 'evaluation' );
		    //tabPanel = this.getDailyDetailsCorrectionTabPanel();
		    //    console.log( tabPanel );
		    //this.loadTabPanelForm( tabPanel, selected, 'correction' );
		    //tabPanel = this.getDailyDetailsActionsTabPanel();
		    //    console.log( tabPanel );
		    //this.loadTabPanelForm( tabPanel, selected, 'dailyAction' );
		    //tabPanel = this.getDailyCommentsTabPanel();
		    //    console.log( tabPanel );
		    //this.loadTabPanelForm( tabPanel, selected, 'comments' );

		    console.log('onWeeklyskillsgridpanelSelectionChange()');
		}
	},

	onSkillssubmitClick: function(button, e, eOpts) {
		debugger;
		window.console.log( "Submit New Skills" );
		var myForm					= button.up().getForm();
		//var newDialog = button.up('monthlynewsummaryformpanel');

		//Get the values from the form and insert a new record into the MonthlySummaryView.

		var formValues				= myForm.getValues();

		//	Create an empty record
		var myRecord	= Ext.create('MySchool.model.weekly.SkillRatingsModel');

		//	Get the stores that we will need
		var myStore		= this.getStore( 'weekly.SkillRatingsStore' );

		//var studentStore = Ext.getStore('student.StudentStore');
		var subjectStore = Ext.getStore( 'subject.SubjectStore' );

		//	Get the student info
		//var studentRecord	= studentStore.getAt(0);
		//var studentId		= studentRecord.get( 'id' );
		//var studentName		= studentRecord.get( 'userName' );

		//	Get the quarterSubject record from the form.
		var quarterSubjectId		= formValues.comboquartersubject;
		var quarterSubjectRecord;
		for( var i = 0; i < subjectStore.count(); i++ )
		{
		    if( subjectStore.getAt(i).get('id') === quarterSubjectId )
		    {
		        quarterSubjectRecord = subjectStore.getAt(i);
		        break;
		    }
		}

		if( typeof quarterSubjectRecord !== 'undefined')
		{
		    //	Get the other information that we need for the new record.
		    var subjName	= quarterSubjectRecord.get('subjName');
		    var subjId		= quarterSubjectRecord.get('subjId');
		    var qtrName		= quarterSubjectRecord.get('qtrName');
		    var qtrId		= quarterSubjectRecord.get('qtrId');
		    var qtrYear		= quarterSubjectRecord.get('qtrYear');
		    //var month_number = formValues.combomonth;

		    //var allSubjRec_ = myAllSubjStore.findRecord( 'subjName', subjName );
		    //var subjId_ = allSubjRec_.get( 'subjId' );


		    //Add the data to the new record.
		    if( formValues.combomonth > 0 )
		    {
		        myRecord.set('week_month', formValues.combomonth);
		        myRecord.set('week_number', formValues.week_number);

		        myRecord.set('subjName', subjName );
		        myRecord.set('subjId', subjId );
		        myRecord.set('qtrName', qtrName );
		        myRecord.set('qtrId', qtrId);
		        myRecord.set('studentId', formValues.studentId);
		        myRecord.set('studentUserName', formValues.studentUserName);
		        myRecord.set('qtrYear', qtrYear);

		        myRecord.set('locked', 0 );
		        myRecord.set('remembering', formValues.remembering);
		        myRecord.set('understanding', formValues.understanding);
		        myRecord.set('applying', formValues.applying);
		        myRecord.set('evaluating', formValues.evaluating);
		        myRecord.set('analyzing', formValues.analyzing);
		        myRecord.set('creating', formValues.creating);
		        myRecord.set('comments', formValues.comments);

		        myRecord.set('whoUpdated', 'login');
		        myRecord.set('lastUpdated', new Date());
		        myRecord.set('version', null);
		        myRecord.set('weeklyskillId', 0 );

		        //add to the store

		        myStore.add( myRecord );

		        //sync the store.
		        myStore.sync();

		        myForm.reset();
		        button.up().hide();
		    }
		    else
		    {
		        var smsg = "You must enter a value for month";
		        Ext.MessageBox.show({
		            title: 'REMOTE EXCEPTION',
		            msg: smsg,
		            icon: Ext.MessageBox.ERROR,
		            buttons: Ext.Msg.OK
		        });
		    }
		}
		else
		{
		    var msg = "You must have student/faculty/subject/quarter records.";
		            Ext.MessageBox.show({
		            title: 'NO DATA',
		            msg: smsg,
		            icon: Ext.MessageBox.ERROR,
		            buttons: Ext.Msg.OK
		        });
		}

	},

	onSkillscancelClick: function(button, e, eOpts) {
		//debugger;
		window.console.log( "Cancel New Skills" );
		var myForm = button.up().getForm();
		myForm.reset();
		button.up().hide();
	},

	buttonHandler: function(button, e, eOpts) {
		debugger;
		if( this.userRole === 'ROLE_USER' )
			return;
		window.console.log(button);
		var b_		= button;
		var form	= b_.up('panel');
		var p_		= form.up();
		var pItemId_ = p_.getItemId();
		var field_;

		if (pItemId_ == 'dailyhourstab') {
		    field_ = p_.down('numberfield');
		} else {
		    field_ = p_.down('textareafield');
		}

		if (b_.getText().charAt(0) == 'D') {
		    b_ = p_.down('#edit' + pItemId_);
		    b_.setText('Edit');
		    b_.setDisabled(false);
		    field_.setDisabled(true);
		} else {
		    b_.setText('Done');
		    field_.setDisabled(false);
		    field_.focus();
		}
	},

	blurHandler: function(o, event, eOpts) {
		//debugger;
		var p_			= o.up('form').up('panel');
		var myForm		= o.up('form');
		//var topP_		= p_.up('panel');
		var pItemId_	= p_.getItemId();
		var edit_		= p_.down('#edit' + pItemId_);
		var myTitle		= p_.title;
		console.log( edit_ );
		//console.log( topP_ );
		console.log( myForm );
		console.log( "pItemId_=" + pItemId_);
		//var myController = this;

		console.log( 'title=' + myTitle );

		//topP_.buttonHandler(edit_);

		Ext.Msg.show({
		    title:'Save Changes?',
		    //msg: 'Would you like to save your changes to ' + pItemId_ + ' ?',
		    msg: 'Would you like to save your changes to ' + myTitle + ' ?',
		    buttons: Ext.Msg.YESNO,
		    icon: Ext.Msg.QUESTION,
		    fn: function(buttonId) {
		        var mystore		= Ext.getStore("weekly.SkillRatingsStore");
		        if (buttonId == 'yes') {
		            Ext.Msg.show({
		                title: 'Save',
		                msg: 'record saved',
		                buttons: Ext.Msg.OK,
		                icon: Ext.window.MessageBox.INFO
		            });
		            //debugger;

		            var myTextArea	= myForm.down('textareafield');
		            var myName		= myTextArea.getName();
		            var myValue		= myTextArea.getValue();
		            var record		= myForm.getRecord();
		            record.set( myName, myValue );
		            record.set( 'lastUpdated', new Date() );
		            record.set( 'whoUpdated', 'login' );

		            mystore.sync();
		        }
		        else {
		            Ext.Msg.show({
		                title: 'Cancel',
		                msg: 'record restored',
		                buttons: Ext.Msg.OK,
		                icon: Ext.window.MessageBox.INFO
		            });
		            mystore.reload();
		        }

		    }
		});
		//debugger;
		this.buttonHandler( edit_ );
	},

	init: function(application) {
				this.control({
					"#editweeklyskillscommentstabpanel": {
						click: this.buttonHandler
					},
					"#weeklyskillscommentstabpaneltextbox": {
						blur: this.blurHandler
					}
				});

		this.control({
			"#weeklyskillrefreshtool": {
				click: this.onWeeklyskillrefreshtoolClick
			},
			"#weeklyskillssearchtool": {
				click: this.onWeeklyskillssearchtoolClick
			},
			"#weeklyskillsnewtool": {
				click: this.onWeeklyskillsnewtoolClick
			},
			"#weeklytoolssavetool": {
				click: this.onWeeklytoolssavetoolClick
			},
			"#weeklyskillsdeletetool": {
				click: this.onWeeklyskillsdeletetoolClick
			},
			"#weeklyskillslocktool": {
				click: this.onWeeklyskillslocktoolClick
			},
			"#weeklyskillsgridpanel": {
				viewready: this.onWeeklyskillsgridpanelViewReady,
				selectionchange: this.onWeeklyskillsgridpanelSelectionChange
			},
			"#skillssubmit": {
				click: this.onSkillssubmitClick
			},
			"#skillscancel": {
				click: this.onSkillscancelClick
			}
		});
	},

	loadTabPanelForm: function(tabPanel, selected, fieldname) {
		debugger;
		var dockedItems = tabPanel.getDockedItems();
		var myForm = dockedItems[0];

		if( Ext.isDefined( myForm ) ){
		    console.log( myForm );
		    //var textBox = myForm.dockedItems.items[0];
		    var textBox = myForm.down('textareafield');
		    textBox.name = fieldname;
		    myForm.loadRecord( selected[0] );
		}
		else{
		    console.log( 'loadTabPanelForm(): No form' );
		    //console.log( tabPanel );
		}

		var editButton = myForm.items.items[0];
		if( this.userRole === 'ROLE_USER') {
			editButton.disable();
		}
		else {
			editButton.enable();
		}
	},

	onMyJsonStoreLoad: function() {
		//debugger;
		//var g_ = Ext.ComponentQuery.query("#monthlysummarygridpanel")[0];
		var g_ = this.getWeeklySkillsGridPanel();

		if (g_.getStore().getCount() > 0) {
		    g_.getSelectionModel().deselectAll();
		    g_.getSelectionModel().select( 0 );
		}

		this.gridViewReady = true;
	}

});

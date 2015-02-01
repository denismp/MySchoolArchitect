/*
 * File: app/controller/monthly/SummaryRatingsController.js
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

Ext.define('MySchool.controller.monthly.SummaryRatingsController', {
	extend: 'Ext.app.Controller',
	alias: 'controller.monthlysummaryratingscontroller',

	models: [
		'monthly.SummaryRatings'
	],
	stores: [
		'monthly.SummaryRatingsStore',
		'student.StudentStore',
		'subject.SubjectStore'
	],

	refs: [
		{
			ref: 'MonthlyDetailsTabPanel',
			selector: '#monthlysummarydetailstabpanel'
		},
		{
			ref: 'MonthlyFeelingsTabPanel',
			selector: '#monthlyfeelingstabpanel'
		},
		{
			ref: 'MonthlyReflectionsTabPanel',
			selector: '#monthlyreflectionstabpanel'
		},
		{
			ref: 'MonthlyPatternsOfCorrectionsTabPanel',
			selector: '#monthlypatternsofcorrectionstabpanel'
		},
		{
			ref: 'MonthlyEffectivenessOfActionsTabPanel',
			selector: '#monthlyeffectivenessofactionstabpanel'
		},
		{
			ref: 'MonthlyActionResultsTabPanel',
			selector: '#monthlyactionresultstabpanel'
		},
		{
			ref: 'MonthlyRealizationsTabPanel',
			selector: '#monthlyrealizationstabpanel'
		},
		{
			ref: 'MonthlyPlannedChangesTabPanel',
			selector: '#monthlyplannedchangestabpanel'
		},
		{
			ref: 'MonthlyCommentsTabPanel',
			selector: '#monthlycommentstabpanel'
		},
		{
			ref: 'EditMonthlyPlannedChangesTabPanel',
			selector: '#editmonthlyplannedchangestabpanel'
		},
		{
			ref: 'MonthlyDetailsGridPanel',
			selector: 'monthlydetailsgridpanel'
		}
	],

	onMonthlysummarygridpanelSelectionChange: function(model, selected, eOpts) {
		debugger;
		// in the onMyJsonStoreLoad we do a deselect so we need to test
		// if selected[0] has a value
		if ( Ext.isDefined( selected  ) && Ext.isDefined( selected[0]  )) {
		    var tabPanel = this.getMonthlyFeelingsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'feelings' );
		    tabPanel = this.getMonthlyReflectionsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'reflections' );
		    tabPanel = this.getMonthlyPatternsOfCorrectionsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'patternsOfCorrections' );
		    tabPanel = this.getMonthlyEffectivenessOfActionsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'effectivenessOfActions' );
		    tabPanel = this.getMonthlyActionResultsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'actionResults' );
		    tabPanel = this.getMonthlyRealizationsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'realizations' );
		    tabPanel = this.getMonthlyPlannedChangesTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'plannedChanges' );
		    tabPanel = this.getMonthlyCommentsTabPanel();
		        console.log( tabPanel );
		    this.loadTabPanelForm( tabPanel, selected, 'comments' );

		    console.log('onMonthlysummarygridpanelSelectionChange()');
		}
	},

	onMonthlysummarydetailspanelActivate: function(component, eOpts) {

	},

	onMonthlyfeelingstabpanelActivate: function(component, eOpts) {
		//debugger;
		console.log( "onMonthlyfeelingstabpanelActivate");
	},

	onMonthlysummarygridviewViewReady: function(dataview, eOpts) {
		debugger;
		console.log('onMonthlysummarygridviewViewReady()');
		var myStore = Ext.getStore('monthly.SummaryRatingsStore');
		var myStudentStore = Ext.getStore('student.StudentStore');
		var securityStore = Ext.getStore('security.SecurityStore');
		var securityRecord = securityStore.getAt(0);
		this.userName = securityRecord.get('userName');
		this.userRole = securityRecord.get('userRole');
		var studentName_;
		var myGrid = this.getMonthlyDetailsGridPanel();

		var studentRecord = myStudentStore.getAt(0);
		//        debugger
		if ( typeof( studentRecord ) != "undefined" )
		{
			if( this.userRole !== 'ROLE_USER')
			{
				var studentName_ = this.userName + '/' + this.userRole;
				myGrid.setTitle('[' + studentName_ + ']');
				myStore.load({
					callback: this.onMyJsonStoreLoad,
					scope: this
				});

			}
			else
			{
				var studentName_ = studentRecord.get('firstName') + " " + studentRecord.get('middleName') + ' ' + studentRecord.get('lastName');

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

	onRefreshmonthlysummariestoolClick: function(tool, e, eOpts) {
		var myStore = Ext.getStore('monthly.SummaryRatingsStore');
		myStore.reload();
	},

	onSavemonthlysummariestoolClick: function(tool, e, eOpts) {
		window.console.log( "monthly.SummaryRatingsController.Save" );
		debugger;

		var mystore = Ext.getStore("monthly.SummaryRatingsStore");

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

	onNewmonthlysummariestoolClick: function(tool, e, eOpts) {
		debugger;
		var studentStore = Ext.getStore('student.StudentStore');
		//var subjectStore = Ext.getStore( 'subject.SubjectStore');
		//var commonQuarterSubjectStore = Ext.getStore( 'common.QuarterSubjectStore');
		//var commonMonthStore = Ext.getStore('common.MonthStore');
		var securityStore				= Ext.getStore( 'security.SecurityStore');
		var commonMonthStore			= Ext.getStore('common.MonthStore');
		var myGrid						= this.getMonthlyDetailsGridPanel();
		var gridModel					= myGrid.getSelectionModel();
		var selectedRecord				= gridModel.getSelection()[0];
		//var row = myGrid.getStore().indexOf(selectedRecord);
		var securityRecord				= securityStore.getAt(0);
		this.userName					= securityRecord.get('userName');
		this.userRole					= securityRecord.get('userRole');
		var studentId;
		var studentName;

		if( this.userRole === 'ROLE_USER' )
			return;

		if( typeof selectedRecord !== 'undefined' )
		{
			//var studentRecord	= studentStore.getAt(0);
			studentId		= selectedRecord.get( 'studentId' );
			studentName		= selectedRecord.get( 'studentUserName' );
		}
		else
		{
			// This is the first time.
			if( this.userRole === 'ROLE_USER' )
			{
				var studentRecord = studentStore.findRecord( 'userName', this.userName );
				studentId = studentRecord.get('studentId');
				studentName = this.userName;
			}
			else
			{
				studentId = 0;
				studentName = 'Enter student user name';
			}
		}

		//var studentRecord = studentStore.getAt(0);
		//var studentId = studentRecord.get( 'id' );
		//var studentName = studentRecord.get( 'userName' );

		var newDialog = Ext.create( 'MySchool.view.monthly.summary.NewSummaryFormPanel' );

		newDialog.down('#newmonthlysummary-studentid').setValue( studentId );
		newDialog.down('#newmonthlysummary-studentname').setValue( studentName );
		if( this.userRole !== 'ROLE_USER')
		{
			newDialog.down('#newmonthlysummary-studentname').setReadOnly( false );
		}
		else
		{
			newDialog.down('#newmonthlysummary-studentname').setReadOnly( true );
		}

		//commonQuarterSubjectStore.myLoad();
		commonMonthStore.myLoad();



		window.console.log( 'New Monthly Summary Dialog' );


		newDialog.render( Ext.getBody() );
		newDialog.show();
	},

	onNewmonthlysummarycanelClick: function(button, e, eOpts) {
		//debugger;
		window.console.log( "Cancel New Monthly Summary" );
		var myForm = button.up().getForm();
		myForm.reset();
		button.up().hide();
	},

	onNewmonthlysummarysubmitClick: function(button, e, eOpts) {
		debugger;
		window.console.log( "Submit New Monthly Summary" );
		var myForm					= button.up().getForm();
		//var newDialog = button.up('monthlynewsummaryformpanel');

		//Get the values from the form and insert a new record into the MonthlySummaryView.

		var formValues				= myForm.getValues();

		//	Create an empty record
		var summaryRatingsRecord	= Ext.create('MySchool.model.monthly.SummaryRatings');

		//	Get the stores that we will need
		var summaryRatingsStore		= this.getStore( 'monthly.SummaryRatingsStore' );

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
		        summaryRatingsRecord.set('month_number', formValues.combomonth);

		        summaryRatingsRecord.set('subjName', subjName );
		        summaryRatingsRecord.set('subjId', subjId );
		        summaryRatingsRecord.set('qtrName', qtrName );
		        summaryRatingsRecord.set('qtrId', qtrId);
		        summaryRatingsRecord.set('studentId', formValues.studentd);
		        summaryRatingsRecord.set('studentUserName', formValues.studentname);
		        summaryRatingsRecord.set('qtrYear', qtrYear);
		        summaryRatingsRecord.set('locked', 0 );
		        summaryRatingsRecord.set('feelings', formValues.feelings);
		        summaryRatingsRecord.set('patternsOfCorrections', formValues.patternsofcorrections);
		        summaryRatingsRecord.set('effectivenessOfActions', formValues.effectivenessofactions);
		        summaryRatingsRecord.set('realizations', formValues.realizations);
		        summaryRatingsRecord.set('reflections', formValues.reflections);
		        summaryRatingsRecord.set('plannedChanges', formValues.plannedchanges);
		        summaryRatingsRecord.set('comments', formValues.comments);
		        summaryRatingsRecord.set('actionResults', formValues.actionresults);
		        summaryRatingsRecord.set('whoUpdated', 'login');
		        summaryRatingsRecord.set('lastUpdated', new Date());
		        summaryRatingsRecord.set('version', null);
		        summaryRatingsRecord.set( 'summaryId', 0 );

		        //add to the store

		        summaryRatingsStore.add( summaryRatingsRecord );

		        //sync the store.
		        summaryRatingsStore.sync();

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
		        var mystore		= Ext.getStore("monthly.SummaryRatingsStore");
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

	onMyJsonStoreLoad: function() {
		//debugger;
		//var g_ = Ext.ComponentQuery.query("#monthlysummarygridpanel")[0];
		var g_ = this.getMonthlyDetailsGridPanel();

		if (g_.getStore().getCount() > 0) {
		    g_.getSelectionModel().deselectAll();
		    g_.getSelectionModel().select( 0 );
		}

		this.gridViewReady = true;
	},

	loadTabPanelForm: function(tabPanel, selected, fieldname) {
		debugger;
		var dockedItems = tabPanel.getDockedItems();
		var myForm = dockedItems[0];

		if( Ext.isDefined( myForm ) )
		{
		    console.log( myForm );
		    //var textBox = myForm.dockedItems.items[0];
		    var textBox = myForm.down('textareafield');
		    textBox.name = fieldname;
		    myForm.loadRecord( selected[0] );
		}
		else
		{
		    console.log( 'No form' );
		    console.log( tabPanel );
		}
		var editButton = myForm.items.items[0];
		if( this.userRole === 'ROLE_USER') {
			editButton.disable();
		}
		else {
			editButton.enable();
		}

	},

	init: function(application) {
				this.control({
					"#monthlyfeelingstabpaneltextbox": {
						blur: this.blurHandler
					},
					"#editmonthlyfeelingstabpanel": {
						click: this.buttonHandler
					},
					"#editmonthlyreflectionstabpanel": {
						click: this.buttonHandler
					},
					"#monthlyreflectionstabpaneltextbox": {
						blur: this.blurHandler
					},
					"#editmonthlyeffectivenessofactionstabpanel": {
						click: this.buttonHandler
					},
					"#monthlyeffectivenessofactionstabpaneltextbox": {
						blur: this.blurHandler
					},
					"#editmonthlyrealizationstabpanel": {
						click: this.buttonHandler
					},
					"#monthlyrealizationstabpaneltextbox": {
						blur: this.blurHandler
					},
					"#editmonthlyplannedchangestabpanel": {
						click: this.buttonHandler
					},
					"#monthlyplannedchangestabpaneltextbox": {
						blur: this.blurHandler
					},
					"#editmonthlycommentstabpanel": {
						click: this.buttonHandler
					},
					"#monthlycommentstabpaneltextbox": {
						blur: this.blurHandler
					},
					"#editmonthlypatternsofcorrectionstabpanel": {
						click: this.buttonHandler
					},
					"#monthlypatternsofcorrectionstabpaneltextbox":{
						blur: this.blurHandler
					},
					"#editmonthlyactionresultstabpanel": {
						click: this.buttonHandler
					},
					"#monthlyactionresultstabpaneltextbox": {
						blur: this.blurHandler
					}

				});

		this.control({
			"#monthlysummarygridpanel": {
				selectionchange: this.onMonthlysummarygridpanelSelectionChange
			},
			"#monthlysummarydetailspanel": {
				activate: this.onMonthlysummarydetailspanelActivate
			},
			"#monthlyfeelingstabpanel": {
				activate: this.onMonthlyfeelingstabpanelActivate
			},
			"#monthlysummarygridview": {
				viewready: this.onMonthlysummarygridviewViewReady
			},
			"#refreshmonthlysummariestool": {
				click: this.onRefreshmonthlysummariestoolClick
			},
			"#savemonthlysummariestool": {
				click: this.onSavemonthlysummariestoolClick
			},
			"#newmonthlysummariestool": {
				click: this.onNewmonthlysummariestoolClick
			},
			"#newmonthlysummarycanel": {
				click: this.onNewmonthlysummarycanelClick
			},
			"#newmonthlysummarysubmit": {
				click: this.onNewmonthlysummarysubmitClick
			}
		});
	}

});

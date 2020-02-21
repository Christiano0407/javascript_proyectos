const page = new fullpage(`#fullpage`, {
    autoScrolling:true,
    fitToSection:false,
     easing:`easeInOutCubic`, 
     scrollingSpeed:700, 
     css3:true,
     easingcss3:`ease-out`,
    loopBottom:true,
    sectionsColor: ['#f2f2f2', '#AB05F2', '#0015FF', 'whitesmoke', '#000'],  
    verticalCentered:true,
    //navigation
    navigation:true,
    menu:`#menu`,
    anchors:[`start`,`product`, `contact`],
    navigationTooltips:[`start`,`product`, `contact`],
    showActiveTooltip:true,
});
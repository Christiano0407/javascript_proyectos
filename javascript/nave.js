const page = new fullpage(`#fullpage`, {
    autoScrolling:true,
    fitToSection:false,
     easing:`easeInOutCubic`, 
     scrollingSpeed:700, 
     css3:true,
     easingcss3:`ease-out`,
    loopBottom:true,
    /*  sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],  */
    //navigation
    navigation:true,
    menu:`#menu`,
    anchors:[`start`,`product`, `contact`],
    navigationToolTips:[`start`,`product`, `contact`],
    showActiveTooltip:false,
});
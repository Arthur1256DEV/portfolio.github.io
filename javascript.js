function addStyle() {
    const buttonV1 = new CSSStyleSheet();
    const buttonV2 = new CSSStyleSheet();
    const asides = new CSSStyleSheet();


    buttonV1.insertRule(`.buttonOrigin {
        display: none;
    }`);
    
    buttonV2.insertRule(`.buttonOriginV2{
        display: flex;
    }`)
  
    asides.insertRule(`aside{
        display: initial;
        margin-left: 20px;
    }`)

    document.adoptedStyleSheets = [buttonV1, buttonV2, asides]
}


function addStyle2() {
    const buttonV1 = new CSSStyleSheet();
    const buttonV2 = new CSSStyleSheet();
    const asides = new CSSStyleSheet();


    buttonV1.insertRule(`.buttonOrigin {
        display: flex;
    }`);
    
    buttonV2.insertRule(`.buttonOriginV2{
        display: none;
    }`)
  
    asides.insertRule(`aside{
        display: none;
    }`)

    
    document.adoptedStyleSheets = [buttonV1, buttonV2, asides]
}
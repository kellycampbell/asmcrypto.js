function skip () {
    test( arguments[0] + ' (SKIPPED)', function () {
        expect(0);
        document.getElementById(QUnit.config.current.id).style.background = '#ffff99';
    });
}

function testIf () {
    if ( arguments[0] ) {
        test( arguments[1], arguments[2] );
    }
    else {
        skip( arguments[1], arguments[2] );
    }
}

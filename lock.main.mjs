// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const _bridgedTokens = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v428, v429, v430, v431, v436, v437] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v428, v429, v430, v431, v437, v443, v444, v451, v452] = svs;
      return (await ((async () => {
        
        
        return v444;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _sourceToken = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v428, v429, v430, v431, v436, v437] = svs;
      return (await ((async () => {
        
        
        return v429;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v428, v429, v430, v431, v437, v443, v444, v451, v452] = svs;
      return (await ((async () => {
        
        
        return v429;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _targetChainId = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v428, v429, v430, v431, v436, v437] = svs;
      return (await ((async () => {
        
        
        return v430;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v428, v429, v430, v431, v437, v443, v444, v451, v452] = svs;
      return (await ((async () => {
        
        
        return v430;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _targetTokenId = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v428, v429, v430, v431, v436, v437] = svs;
      return (await ((async () => {
        
        
        return v431;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v428, v429, v430, v431, v437, v443, v444, v451, v452] = svs;
      return (await ((async () => {
        
        
        return v431;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      bridgedTokens: {
        decode: _bridgedTokens,
        dom: [],
        rng: ctc2
        },
      sourceToken: {
        decode: _sourceToken,
        dom: [],
        rng: ctc1
        },
      targetChainId: {
        decode: _targetChainId,
        dom: [],
        rng: ctc2
        },
      targetTokenId: {
        decode: _targetTokenId,
        dom: [],
        rng: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc5, ctc6],
      4: [ctc0, ctc1, ctc2, ctc2, ctc6, ctc3, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    sourceChainId: ctc0,
    sourceToken: ctc1,
    targetChainId: ctc0,
    targetTokenId: ctc0
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '52'));
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc6, ctc0]);
  const ctc8 = stdlib.T_Data({
    UserAPI_bridgeToken0_60: ctc5,
    UserAPI_unbridgeToken0_60: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v413 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v414 = [v413];
  const v415 = [stdlib.Token_zero];
  const v418 = stdlib.protect(ctc2, interact.parameters, 'for Deployer\'s interact field parameters');
  const v420 = v418.sourceToken;
  const v421 = v418.targetChainId;
  const v422 = v418.targetTokenId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v420, v421, v422],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./lock.rsh:33:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v429, v430, v431], secs: v433, time: v432, didSend: v36, from: v428 } = txn1;
      
      const v434 = v414[stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0')];
      const v435 = stdlib.Array_set(v434, '0', stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0'));
      const v436 = stdlib.Array_set(v414, stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0'), v435);
      const v437 = stdlib.Array_set(v415, stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0'), v429);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v429
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v429, v430, v431], secs: v433, time: v432, didSend: v36, from: v428 } = txn1;
  const v434 = v414[stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0')];
  const v435 = stdlib.Array_set(v434, '0', stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0'));
  const v436 = stdlib.Array_set(v414, stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0'), v435);
  const v437 = stdlib.Array_set(v415, stdlib.checkedBigNumberify('./lock.rsh:33:12:dot', stdlib.UInt_max, '0'), v429);
  ;
  ;
  stdlib.protect(ctc3, await interact.ready(), {
    at: './lock.rsh:41:26:application',
    fs: ['at ./lock.rsh:41:26:application call to [unknown function] (defined at: ./lock.rsh:41:26:function exp)', 'at ./lock.rsh:41:26:application call to "liftedInteract" (defined at: ./lock.rsh:41:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v428, v429, v430, v431, v436, v437],
    evt_cnt: 0,
    funcNum: 1,
    lct: v432,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./lock.rsh:42:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v441, time: v440, didSend: v45, from: v439 } = txn2;
      
      ;
      const v443 = false;
      const v444 = stdlib.checkedBigNumberify('./lock.rsh:44:55:decimal', stdlib.UInt_max, '0');
      const v445 = v440;
      const v451 = v436;
      const v452 = stdlib.checkedBigNumberify('./lock.rsh:28:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v458 = v443 ? false : true;
        
        return v458;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v743 = v451[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
        const v744 = v743[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v428,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v428,
          tok: v429
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v429
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc0, ctc0, ctc11, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v441, time: v440, didSend: v45, from: v439 } = txn2;
  ;
  const v442 = stdlib.addressEq(v428, v439);
  stdlib.assert(v442, {
    at: './lock.rsh:42:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  let v443 = false;
  let v444 = stdlib.checkedBigNumberify('./lock.rsh:44:55:decimal', stdlib.UInt_max, '0');
  let v445 = v440;
  let v451 = v436;
  let v452 = stdlib.checkedBigNumberify('./lock.rsh:28:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v458 = v443 ? false : true;
    
    return v458;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v519], secs: v521, time: v520, didSend: v251, from: v518 } = txn4;
    switch (v519[0]) {
      case 'UserAPI_bridgeToken0_60': {
        const v522 = v519[1];
        undefined /* setApiDetails */;
        const v527 = v522[stdlib.checkedBigNumberify('./lock.rsh:51:9:spread', stdlib.UInt_max, '0')];
        ;
        const v763 = v437[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '0')];
        const v769 = stdlib.tokenEq(v763, v429);
        const v772 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v773 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v774 = v769 ? v773 : v772;
        const v565 = v774[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '1')];
        const v567 = v451[v565];
        const v568 = v567[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '0')];
        const v569 = stdlib.add(v568, v527);
        const v586 = stdlib.Array_set(v567, '0', v569);
        const v587 = stdlib.Array_set(v451, v565, v586);
        ;
        const v591 = stdlib.gt(v527, stdlib.checkedBigNumberify('./lock.rsh:58:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v591, {
          at: './lock.rsh:58:16:application',
          fs: ['at ./lock.rsh:57:19:application call to [unknown function] (defined at: ./lock.rsh:57:19:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v592 = null;
        await txn4.getOutput('UserAPI_bridgeToken', 'v592', ctc3, v592);
        const v600 = stdlib.safeAdd(v444, v527);
        const cv443 = v443;
        const cv444 = v600;
        const cv445 = v520;
        const cv451 = v587;
        const cv452 = v452;
        
        v443 = cv443;
        v444 = cv444;
        v445 = cv445;
        v451 = cv451;
        v452 = cv452;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'UserAPI_unbridgeToken0_60': {
        const v632 = v519[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v713 = v632[stdlib.checkedBigNumberify('./lock.rsh:64:9:spread', stdlib.UInt_max, '0')];
        const v717 = stdlib.gt(v713, stdlib.checkedBigNumberify('./lock.rsh:74:25:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v717, {
          at: './lock.rsh:74:18:application',
          fs: ['at ./lock.rsh:73:25:application call to [unknown function] (defined at: ./lock.rsh:73:25:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v718 = v451[stdlib.checkedBigNumberify('./lock.rsh:75:26:application', stdlib.UInt_max, '0')];
        const v719 = v718[stdlib.checkedBigNumberify('./lock.rsh:75:26:application', stdlib.UInt_max, '0')];
        const v720 = stdlib.ge(v719, v713);
        stdlib.assert(v720, {
          at: './lock.rsh:75:18:application',
          fs: ['at ./lock.rsh:73:25:application call to [unknown function] (defined at: ./lock.rsh:73:25:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v726 = stdlib.sub(v719, v713);
        const v728 = stdlib.Array_set(v718, '0', v726);
        const v729 = stdlib.Array_set(v451, stdlib.checkedBigNumberify('./lock.rsh:76:47:application', stdlib.UInt_max, '0'), v728);
        ;
        const v730 = null;
        await txn4.getOutput('UserAPI_unbridgeToken', 'v730', ctc3, v730);
        const v740 = stdlib.safeSub(v444, v713);
        const cv443 = v443;
        const cv444 = v740;
        const cv445 = v520;
        const cv451 = v729;
        const cv452 = v452;
        
        v443 = cv443;
        v444 = cv444;
        v445 = cv445;
        v451 = cv451;
        v452 = cv452;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v743 = v451[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
  const v744 = v743[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _UserAPI_bridgeToken4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_bridgeToken4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_bridgeToken4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '52'));
  const ctc9 = stdlib.T_Tuple([ctc2, ctc0, ctc8, ctc2]);
  const ctc10 = stdlib.T_Data({
    UserAPI_bridgeToken0_60: ctc7,
    UserAPI_unbridgeToken0_60: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v428, v429, v430, v431, v437, v443, v444, v451, v452] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc3, ctc4, ctc2, ctc6, ctc2]);
  const v461 = stdlib.protect(ctc7, await interact.in(), {
    at: './lock.rsh:1:23:application',
    fs: ['at ./lock.rsh:53:16:application call to [unknown function] (defined at: ./lock.rsh:53:16:function exp)', 'at ./lock.rsh:44:46:application call to "runUserAPI_bridgeToken0_60" (defined at: ./lock.rsh:51:9:function exp)', 'at ./lock.rsh:44:46:application call to [unknown function] (defined at: ./lock.rsh:44:46:function exp)'],
    msg: 'in',
    who: 'UserAPI_bridgeToken'
    });
  const v462 = v461[stdlib.checkedBigNumberify('./lock.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v467 = stdlib.gt(v462, stdlib.checkedBigNumberify('./lock.rsh:54:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v467, {
    at: './lock.rsh:54:15:application',
    fs: ['at ./lock.rsh:53:16:application call to [unknown function] (defined at: ./lock.rsh:53:16:function exp)', 'at ./lock.rsh:53:16:application call to [unknown function] (defined at: ./lock.rsh:53:16:function exp)', 'at ./lock.rsh:44:46:application call to "runUserAPI_bridgeToken0_60" (defined at: ./lock.rsh:51:9:function exp)', 'at ./lock.rsh:44:46:application call to [unknown function] (defined at: ./lock.rsh:44:46:function exp)'],
    msg: 'Amount of token bridged must be greater than zero',
    who: 'UserAPI_bridgeToken'
    });
  const v472 = ['UserAPI_bridgeToken0_60', v461];
  
  const txn1 = await (ctc.sendrecv({
    args: [v428, v429, v430, v431, v437, v443, v444, v451, v452, v472],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./lock.rsh:56:20:decimal', stdlib.UInt_max, '0'), [[v462, v429]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v519], secs: v521, time: v520, didSend: v251, from: v518 } = txn1;
      
      switch (v519[0]) {
        case 'UserAPI_bridgeToken0_60': {
          const v522 = v519[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_bridgeToken"
            });
          const v527 = v522[stdlib.checkedBigNumberify('./lock.rsh:51:9:spread', stdlib.UInt_max, '0')];
          ;
          const v763 = v437[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '0')];
          const v769 = stdlib.tokenEq(v763, v429);
          const v772 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v773 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v774 = v769 ? v773 : v772;
          const v565 = v774[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '1')];
          const v567 = v451[v565];
          const v568 = v567[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '0')];
          const v569 = stdlib.add(v568, v527);
          const v586 = stdlib.Array_set(v567, '0', v569);
          const v587 = stdlib.Array_set(v451, v565, v586);
          sim_r.txns.push({
            amt: v527,
            kind: 'to',
            tok: v429
            });
          const v592 = null;
          const v593 = await txn1.getOutput('UserAPI_bridgeToken', 'v592', ctc11, v592);
          
          const v600 = stdlib.safeAdd(v444, v527);
          const v1087 = v443;
          const v1088 = v600;
          const v1090 = v587;
          const v1091 = v452;
          if (v443) {
            const v1093 = v587[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
            const v1094 = v1093[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v428,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v428,
              tok: v429
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v429
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'UserAPI_unbridgeToken0_60': {
          const v632 = v519[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc4, ctc2, ctc6, ctc2, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v519], secs: v521, time: v520, didSend: v251, from: v518 } = txn1;
  switch (v519[0]) {
    case 'UserAPI_bridgeToken0_60': {
      const v522 = v519[1];
      undefined /* setApiDetails */;
      const v527 = v522[stdlib.checkedBigNumberify('./lock.rsh:51:9:spread', stdlib.UInt_max, '0')];
      ;
      const v763 = v437[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '0')];
      const v769 = stdlib.tokenEq(v763, v429);
      const v772 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v773 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v774 = v769 ? v773 : v772;
      const v565 = v774[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '1')];
      const v567 = v451[v565];
      const v568 = v567[stdlib.checkedBigNumberify('./lock.rsh:44:46:dot', stdlib.UInt_max, '0')];
      const v569 = stdlib.add(v568, v527);
      const v586 = stdlib.Array_set(v567, '0', v569);
      const v587 = stdlib.Array_set(v451, v565, v586);
      ;
      const v591 = stdlib.gt(v527, stdlib.checkedBigNumberify('./lock.rsh:58:23:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v591, {
        at: './lock.rsh:58:16:application',
        fs: ['at ./lock.rsh:57:19:application call to [unknown function] (defined at: ./lock.rsh:57:19:function exp)'],
        msg: null,
        who: 'UserAPI_bridgeToken'
        });
      const v592 = null;
      const v593 = await txn1.getOutput('UserAPI_bridgeToken', 'v592', ctc11, v592);
      if (v251) {
        stdlib.protect(ctc11, await interact.out(v522, v593), {
          at: './lock.rsh:52:7:application',
          fs: ['at ./lock.rsh:52:7:application call to [unknown function] (defined at: ./lock.rsh:52:7:function exp)', 'at ./lock.rsh:60:10:application call to "k" (defined at: ./lock.rsh:57:19:function exp)', 'at ./lock.rsh:57:19:application call to [unknown function] (defined at: ./lock.rsh:57:19:function exp)'],
          msg: 'out',
          who: 'UserAPI_bridgeToken'
          });
        }
      else {
        }
      
      const v600 = stdlib.safeAdd(v444, v527);
      const v1087 = v443;
      const v1088 = v600;
      const v1090 = v587;
      const v1091 = v452;
      if (v443) {
        const v1093 = v587[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
        const v1094 = v1093[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'UserAPI_unbridgeToken0_60': {
      const v632 = v519[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_unbridgeToken4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_unbridgeToken4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_unbridgeToken4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '52'));
  const ctc8 = stdlib.T_Tuple([ctc2, ctc0, ctc7, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc10 = stdlib.T_Data({
    UserAPI_bridgeToken0_60: ctc9,
    UserAPI_unbridgeToken0_60: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v428, v429, v430, v431, v437, v443, v444, v451, v452] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc3, ctc4, ctc2, ctc6, ctc2]);
  const v476 = stdlib.protect(ctc8, await interact.in(), {
    at: './lock.rsh:1:23:application',
    fs: ['at ./lock.rsh:66:22:application call to [unknown function] (defined at: ./lock.rsh:66:22:function exp)', 'at ./lock.rsh:44:46:application call to "runUserAPI_unbridgeToken0_60" (defined at: ./lock.rsh:64:9:function exp)', 'at ./lock.rsh:44:46:application call to [unknown function] (defined at: ./lock.rsh:44:46:function exp)'],
    msg: 'in',
    who: 'UserAPI_unbridgeToken'
    });
  const v477 = v476[stdlib.checkedBigNumberify('./lock.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v486 = stdlib.gt(v477, stdlib.checkedBigNumberify('./lock.rsh:67:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v486, {
    at: './lock.rsh:67:17:application',
    fs: ['at ./lock.rsh:66:22:application call to [unknown function] (defined at: ./lock.rsh:66:22:function exp)', 'at ./lock.rsh:66:22:application call to [unknown function] (defined at: ./lock.rsh:66:22:function exp)', 'at ./lock.rsh:44:46:application call to "runUserAPI_unbridgeToken0_60" (defined at: ./lock.rsh:64:9:function exp)', 'at ./lock.rsh:44:46:application call to [unknown function] (defined at: ./lock.rsh:44:46:function exp)'],
    msg: 'Amount of token to unbridge must be greater than zero',
    who: 'UserAPI_unbridgeToken'
    });
  const v487 = v451[stdlib.checkedBigNumberify('./lock.rsh:68:25:application', stdlib.UInt_max, '0')];
  const v488 = v487[stdlib.checkedBigNumberify('./lock.rsh:68:25:application', stdlib.UInt_max, '0')];
  const v489 = stdlib.ge(v488, v477);
  stdlib.assert(v489, {
    at: './lock.rsh:68:17:application',
    fs: ['at ./lock.rsh:66:22:application call to [unknown function] (defined at: ./lock.rsh:66:22:function exp)', 'at ./lock.rsh:66:22:application call to [unknown function] (defined at: ./lock.rsh:66:22:function exp)', 'at ./lock.rsh:44:46:application call to "runUserAPI_unbridgeToken0_60" (defined at: ./lock.rsh:64:9:function exp)', 'at ./lock.rsh:44:46:application call to [unknown function] (defined at: ./lock.rsh:44:46:function exp)'],
    msg: 'Not enough token balance to unbridge',
    who: 'UserAPI_unbridgeToken'
    });
  const v496 = ['UserAPI_unbridgeToken0_60', v476];
  
  const txn1 = await (ctc.sendrecv({
    args: [v428, v429, v430, v431, v437, v443, v444, v451, v452, v496],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./lock.rsh:72:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./lock.rsh:72:29:decimal', stdlib.UInt_max, '0'), v429]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v519], secs: v521, time: v520, didSend: v251, from: v518 } = txn1;
      
      switch (v519[0]) {
        case 'UserAPI_bridgeToken0_60': {
          const v522 = v519[1];
          
          break;
          }
        case 'UserAPI_unbridgeToken0_60': {
          const v632 = v519[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_unbridgeToken"
            });
          ;
          ;
          const v713 = v632[stdlib.checkedBigNumberify('./lock.rsh:64:9:spread', stdlib.UInt_max, '0')];
          const v718 = v451[stdlib.checkedBigNumberify('./lock.rsh:75:26:application', stdlib.UInt_max, '0')];
          const v719 = v718[stdlib.checkedBigNumberify('./lock.rsh:75:26:application', stdlib.UInt_max, '0')];
          const v726 = stdlib.sub(v719, v713);
          const v728 = stdlib.Array_set(v718, '0', v726);
          const v729 = stdlib.Array_set(v451, stdlib.checkedBigNumberify('./lock.rsh:76:47:application', stdlib.UInt_max, '0'), v728);
          sim_r.txns.push({
            kind: 'from',
            to: v518,
            tok: v429
            });
          const v730 = null;
          const v731 = await txn1.getOutput('UserAPI_unbridgeToken', 'v730', ctc11, v730);
          
          const v740 = stdlib.safeSub(v444, v713);
          const v1111 = v443;
          const v1112 = v740;
          const v1114 = v729;
          const v1115 = v452;
          if (v443) {
            const v1117 = v729[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
            const v1118 = v1117[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v428,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v428,
              tok: v429
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v429
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc4, ctc2, ctc6, ctc2, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v519], secs: v521, time: v520, didSend: v251, from: v518 } = txn1;
  switch (v519[0]) {
    case 'UserAPI_bridgeToken0_60': {
      const v522 = v519[1];
      return;
      break;
      }
    case 'UserAPI_unbridgeToken0_60': {
      const v632 = v519[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v713 = v632[stdlib.checkedBigNumberify('./lock.rsh:64:9:spread', stdlib.UInt_max, '0')];
      const v717 = stdlib.gt(v713, stdlib.checkedBigNumberify('./lock.rsh:74:25:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v717, {
        at: './lock.rsh:74:18:application',
        fs: ['at ./lock.rsh:73:25:application call to [unknown function] (defined at: ./lock.rsh:73:25:function exp)'],
        msg: null,
        who: 'UserAPI_unbridgeToken'
        });
      const v718 = v451[stdlib.checkedBigNumberify('./lock.rsh:75:26:application', stdlib.UInt_max, '0')];
      const v719 = v718[stdlib.checkedBigNumberify('./lock.rsh:75:26:application', stdlib.UInt_max, '0')];
      const v720 = stdlib.ge(v719, v713);
      stdlib.assert(v720, {
        at: './lock.rsh:75:18:application',
        fs: ['at ./lock.rsh:73:25:application call to [unknown function] (defined at: ./lock.rsh:73:25:function exp)'],
        msg: null,
        who: 'UserAPI_unbridgeToken'
        });
      const v726 = stdlib.sub(v719, v713);
      const v728 = stdlib.Array_set(v718, '0', v726);
      const v729 = stdlib.Array_set(v451, stdlib.checkedBigNumberify('./lock.rsh:76:47:application', stdlib.UInt_max, '0'), v728);
      ;
      const v730 = null;
      const v731 = await txn1.getOutput('UserAPI_unbridgeToken', 'v730', ctc11, v730);
      if (v251) {
        stdlib.protect(ctc11, await interact.out(v632, v731), {
          at: './lock.rsh:65:7:application',
          fs: ['at ./lock.rsh:65:7:application call to [unknown function] (defined at: ./lock.rsh:65:7:function exp)', 'at ./lock.rsh:78:12:application call to "k" (defined at: ./lock.rsh:73:25:function exp)', 'at ./lock.rsh:73:25:application call to [unknown function] (defined at: ./lock.rsh:73:25:function exp)'],
          msg: 'out',
          who: 'UserAPI_unbridgeToken'
          });
        }
      else {
        }
      
      const v740 = stdlib.safeSub(v444, v713);
      const v1111 = v443;
      const v1112 = v740;
      const v1114 = v729;
      const v1115 = v452;
      if (v443) {
        const v1117 = v729[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
        const v1118 = v1117[stdlib.checkedBigNumberify('./lock.rsh:83:32:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function UserAPI_bridgeToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_bridgeToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_bridgeToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _UserAPI_bridgeToken4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function UserAPI_unbridgeToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_unbridgeToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_unbridgeToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _UserAPI_unbridgeToken4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`UserAPI_bridgeToken(uint64,address)void`, `UserAPI_unbridgeToken(uint64,address,byte[52],uint64)void`, `_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[100])))void`],
    pure: [`bridgedTokens()uint64`, `sourceToken()uint64`, `targetChainId()uint64`, `targetTokenId()uint64`],
    sigs: [`UserAPI_bridgeToken(uint64,address)void`, `UserAPI_unbridgeToken(uint64,address,byte[52],uint64)void`, `_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[100])))void`, `bridgedTokens()uint64`, `sourceToken()uint64`, `targetChainId()uint64`, `targetTokenId()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEECBGgjQYgKDAmAgABADEYQQNcKGRJIls1ASVbNQIpZIIJBAOvozwEC7cvMQQqxBJNBEcJS+sEkMRYtQTGxWvVBNnPaWYE3JsvDwTf2SMoNhoAjgkC4wOrAykC/gBSAAEDrgOoAvMANhoBFzYaAjULNQwlryk0DBY0C1BQgTyvUFA1CyQ0ARJEiAO9NAsiWzUMNAtXCGU1DYAEtvEqtDQMFlA0DVCwNAyIBAA0DSJVjQIC3QLgQv+uNhoBFzYaAjYaAzYaBBc1CzUMNQ01DiWvgAEBNA4WNA1QNAxQNAsWUFBQNQtC/5w0DVcBKCJbNQuACQAAAAAAAAAAAYAJAQAAAAAAAAAANBMiWzQWEk0jWzUYNA8hBDQYCyEEWDUNNAs0FjEWNAAjCEk1AAlHAzgUMgoSRDgQJBJEOBFPAhJEOBISRDQLIg1EKDUMgAgAAAAAAAACUDQMULA0DDUENBE0CwgyBjQPNBghBAs0DUkiWzQLCBZcAF01DzUQNRE0EkECFjQONBeIAz40D1cAESJbNBY0F4gDECI0FjIKMgmIAzAxGYEFEkSIAxEiMgoyCYgDGTQDQAAKgAQVH3x1NARQsCNDNA1XAWQiW0k1CyINRDQPVwARSTUYIltJNQ00Cw9ENAs0FjEAiAK9KDUMgAgAAAAAAAAC2jQMULA0DDUENBE0CwkyBjQPNBg0DTQLCRZcAFwANQ81EDURQv9gNAEkEkSIAiM0ERY1BDEZIhJEQv+FNAEkDEEBpTQBIxJEiAI+NBYWNQRC/+E0ASQMQQGeNAEjEkSIAic0FRY1BEL/yjQBJAxBAZc0ASMSRIgCEDQUFjUEQv+zMQA1FzQLIls1DDQLJVs1FjQLgRBbNRU0C4EYWzUUgAT27avSNAwWUDQWFlA0FRZQNBQWULA0DIgB+iEEr0k1C0lXABElr1wAXAA1DSWvNBYWXAA1EyEFiAHkIjQWMgqIAc40FzQWFlA0FRZQNBQWUDQNUDQTUCEEr1AjMgY1AjUBKUxXAGJnKDQBFjQCFlBnMRkiEkSIAaxC/qAjNAESRIgBZTQLFzUMgATVFRkUNAwWULA0DIgBfDQXMQASRCIiMgY0DSI1DjUPNRA1ETUSQv40iAFXIQWIAWQ2GgE1C0L/HogBRzYaATULQv+uiAE8NhoBNQtC/RQiMTQSRIECMTUSRCIxNhJEIjE3EkSIARyBYq8iIkL/ZUL+i0L9UkL+KyI1EjQXNBYWUDQVFlA0FBZQNBNQNBIWUQcIUDQRFlA0D1A0DhZQJDIGQv8wIrIBI7IQsgeyCLOJIrIBJLIQshSyEbISs4k0ASQSRIgAYjQWFjUEQv48NAEkEkSIAFI0FRY1BEL+LDQBJBJEiABCNBQWNQRC/hxC/iFC/jVC/klIiUwJSTUGMgmIAKSJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSVcAIDUXSSEGWzUWSSEHWzUVSSEIWzUUSVc4CDUTSVdAARc1EkmBQVs1EUlXSRE1D4FaWzUOiUlXACA1F0khBls1FkkhB1s1FUkhCFs1FElXOBE1DVdJCDUTiSM1A4mxQv8lSSISTDQCEhFEiTQGCDUGiTQGNAdKD0H/VUL/XbFC/vmxsglC/vOxshVC/vk=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `20`,
    1000: `592`,
    1001: `592`,
    1002: `592`,
    1003: `593`,
    1004: `593`,
    1005: `594`,
    1006: `595`,
    1007: `595`,
    1008: `596`,
    1009: `596`,
    101: `20`,
    1010: `596`,
    1011: `598`,
    1012: `598`,
    1013: `599`,
    1014: `600`,
    1015: `601`,
    1016: `604`,
    1017: `604`,
    1018: `604`,
    1019: `605`,
    102: `20`,
    1020: `605`,
    1021: `606`,
    1022: `607`,
    1023: `607`,
    1024: `608`,
    1025: `608`,
    1026: `608`,
    1027: `610`,
    1028: `610`,
    1029: `611`,
    103: `20`,
    1030: `612`,
    1031: `613`,
    1032: `616`,
    1033: `616`,
    1034: `616`,
    1035: `617`,
    1036: `617`,
    1037: `618`,
    1038: `619`,
    1039: `619`,
    104: `20`,
    1040: `620`,
    1041: `620`,
    1042: `620`,
    1043: `622`,
    1044: `622`,
    1045: `622`,
    1046: `624`,
    1047: `624`,
    1048: `624`,
    1049: `626`,
    105: `20`,
    1050: `626`,
    1051: `626`,
    1052: `628`,
    1053: `629`,
    1054: `631`,
    1055: `632`,
    1056: `633`,
    1057: `634`,
    1058: `634`,
    1059: `635`,
    106: `20`,
    1060: `635`,
    1061: `636`,
    1062: `636`,
    1063: `636`,
    1064: `637`,
    1065: `639`,
    1066: `640`,
    1067: `641`,
    1068: `641`,
    1069: `641`,
    107: `22`,
    1070: `642`,
    1071: `643`,
    1072: `643`,
    1073: `646`,
    1074: `646`,
    1075: `647`,
    1076: `647`,
    1077: `648`,
    1078: `649`,
    1079: `650`,
    108: `24`,
    1080: `651`,
    1081: `651`,
    1082: `652`,
    1083: `653`,
    1084: `653`,
    1085: `654`,
    1086: `654`,
    1087: `655`,
    1088: `655`,
    1089: `656`,
    109: `24`,
    1090: `657`,
    1091: `658`,
    1092: `658`,
    1093: `659`,
    1094: `660`,
    1095: `661`,
    1096: `662`,
    1097: `662`,
    1098: `663`,
    1099: `664`,
    11: `2`,
    110: `24`,
    1100: `665`,
    1101: `667`,
    1102: `668`,
    1103: `668`,
    1104: `668`,
    1105: `669`,
    1106: `669`,
    1107: `670`,
    1108: `671`,
    1109: `671`,
    111: `25`,
    1110: `672`,
    1111: `673`,
    1112: `673`,
    1113: `674`,
    1114: `675`,
    1115: `675`,
    1116: `676`,
    1117: `677`,
    1118: `677`,
    1119: `678`,
    112: `26`,
    1120: `679`,
    1121: `679`,
    1122: `680`,
    1123: `681`,
    1124: `681`,
    1125: `682`,
    1126: `683`,
    1127: `683`,
    1128: `683`,
    1129: `684`,
    113: `26`,
    1130: `684`,
    1131: `685`,
    1132: `686`,
    1133: `686`,
    1134: `686`,
    1135: `687`,
    1136: `688`,
    1137: `688`,
    1138: `689`,
    1139: `690`,
    114: `26`,
    1140: `690`,
    1141: `691`,
    1142: `692`,
    1143: `692`,
    1144: `693`,
    1145: `694`,
    1146: `694`,
    1147: `694`,
    1148: `695`,
    1149: `695`,
    115: `27`,
    1150: `696`,
    1151: `696`,
    1152: `697`,
    1153: `698`,
    1154: `698`,
    1155: `699`,
    1156: `701`,
    1157: `702`,
    1158: `702`,
    1159: `702`,
    116: `27`,
    1160: `703`,
    1161: `703`,
    1162: `704`,
    1163: `705`,
    1164: `705`,
    1165: `706`,
    1166: `707`,
    1167: `707`,
    1168: `708`,
    1169: `709`,
    117: `28`,
    1170: `709`,
    1171: `710`,
    1172: `711`,
    1173: `711`,
    1174: `712`,
    1175: `713`,
    1176: `713`,
    1177: `714`,
    1178: `715`,
    1179: `715`,
    118: `28`,
    1180: `716`,
    1181: `717`,
    1182: `717`,
    1183: `717`,
    1184: `718`,
    1185: `718`,
    1186: `719`,
    1187: `719`,
    1188: `719`,
    1189: `720`,
    119: `30`,
    1190: `720`,
    1191: `721`,
    1192: `723`,
    1193: `724`,
    1194: `724`,
    1195: `725`,
    1196: `727`,
    1197: `728`,
    1198: `728`,
    1199: `728`,
    12: `2`,
    120: `31`,
    1200: `730`,
    1201: `731`,
    1202: `732`,
    1203: `733`,
    1204: `734`,
    1205: `734`,
    1206: `735`,
    1207: `736`,
    1208: `737`,
    1209: `738`,
    121: `32`,
    1210: `740`,
    1211: `740`,
    1212: `741`,
    1213: `742`,
    1214: `742`,
    1215: `743`,
    1216: `745`,
    1217: `745`,
    1218: `746`,
    1219: `746`,
    122: `33`,
    1220: `747`,
    1221: `748`,
    1222: `749`,
    1223: `749`,
    1224: `749`,
    1225: `750`,
    1226: `750`,
    1227: `750`,
    1228: `752`,
    1229: `753`,
    123: `33`,
    1230: `753`,
    1231: `753`,
    1232: `755`,
    1233: `756`,
    1234: `756`,
    1235: `757`,
    1236: `757`,
    1237: `757`,
    1238: `759`,
    1239: `760`,
    124: `34`,
    1240: `760`,
    1241: `761`,
    125: `35`,
    126: `35`,
    127: `36`,
    128: `37`,
    129: `38`,
    13: `2`,
    130: `38`,
    131: `39`,
    132: `40`,
    133: `41`,
    134: `42`,
    135: `42`,
    136: `44`,
    137: `45`,
    138: `45`,
    139: `46`,
    14: `2`,
    140: `47`,
    141: `48`,
    142: `48`,
    143: `48`,
    144: `49`,
    145: `49`,
    146: `50`,
    147: `51`,
    148: `52`,
    149: `52`,
    15: `2`,
    150: `53`,
    151: `53`,
    152: `54`,
    153: `54`,
    154: `54`,
    155: `55`,
    156: `55`,
    157: `56`,
    158: `56`,
    159: `56`,
    16: `2`,
    160: `56`,
    161: `56`,
    162: `56`,
    163: `57`,
    164: `57`,
    165: `58`,
    166: `59`,
    167: `60`,
    168: `60`,
    169: `61`,
    17: `2`,
    170: `62`,
    171: `64`,
    172: `64`,
    173: `65`,
    174: `65`,
    175: `65`,
    176: `66`,
    177: `66`,
    178: `67`,
    179: `68`,
    18: `2`,
    180: `69`,
    181: `69`,
    182: `69`,
    183: `69`,
    184: `69`,
    185: `69`,
    186: `70`,
    187: `70`,
    188: `70`,
    189: `72`,
    19: `4`,
    190: `72`,
    191: `72`,
    192: `73`,
    193: `74`,
    194: `74`,
    195: `74`,
    196: `75`,
    197: `75`,
    198: `75`,
    199: `76`,
    2: `2`,
    20: `4`,
    200: `76`,
    201: `76`,
    202: `77`,
    203: `78`,
    204: `78`,
    205: `79`,
    206: `79`,
    207: `80`,
    208: `80`,
    209: `81`,
    21: `5`,
    210: `81`,
    211: `83`,
    212: `84`,
    213: `85`,
    214: `85`,
    215: `85`,
    216: `86`,
    217: `86`,
    218: `87`,
    219: `88`,
    22: `5`,
    220: `88`,
    221: `89`,
    222: `90`,
    223: `90`,
    224: `91`,
    225: `92`,
    226: `92`,
    227: `93`,
    228: `94`,
    229: `95`,
    23: `5`,
    230: `96`,
    231: `97`,
    232: `97`,
    233: `98`,
    234: `98`,
    235: `98`,
    236: `100`,
    237: `100`,
    238: `101`,
    239: `101`,
    24: `6`,
    240: `101`,
    241: `102`,
    242: `103`,
    243: `104`,
    244: `104`,
    245: `105`,
    246: `105`,
    247: `105`,
    248: `105`,
    249: `105`,
    25: `7`,
    250: `105`,
    251: `105`,
    252: `105`,
    253: `105`,
    254: `105`,
    255: `105`,
    256: `106`,
    257: `106`,
    258: `106`,
    259: `106`,
    26: `8`,
    260: `106`,
    261: `106`,
    262: `106`,
    263: `106`,
    264: `106`,
    265: `106`,
    266: `106`,
    267: `107`,
    268: `107`,
    269: `108`,
    27: `9`,
    270: `109`,
    271: `110`,
    272: `110`,
    273: `111`,
    274: `112`,
    275: `113`,
    276: `114`,
    277: `115`,
    278: `115`,
    279: `116`,
    28: `10`,
    280: `116`,
    281: `117`,
    282: `117`,
    283: `118`,
    284: `118`,
    285: `119`,
    286: `120`,
    287: `120`,
    288: `121`,
    289: `122`,
    29: `11`,
    290: `122`,
    291: `123`,
    292: `123`,
    293: `124`,
    294: `124`,
    295: `127`,
    296: `127`,
    297: `128`,
    298: `128`,
    299: `129`,
    3: `2`,
    30: `11`,
    300: `130`,
    301: `131`,
    302: `132`,
    303: `132`,
    304: `133`,
    305: `134`,
    306: `134`,
    307: `135`,
    308: `135`,
    309: `136`,
    31: `12`,
    310: `136`,
    311: `137`,
    312: `138`,
    313: `139`,
    314: `139`,
    315: `140`,
    316: `141`,
    317: `142`,
    318: `143`,
    319: `143`,
    32: `13`,
    320: `144`,
    321: `144`,
    322: `145`,
    323: `146`,
    324: `147`,
    325: `147`,
    326: `148`,
    327: `149`,
    328: `152`,
    329: `152`,
    33: `14`,
    330: `153`,
    331: `154`,
    332: `155`,
    333: `159`,
    334: `160`,
    335: `160`,
    336: `161`,
    337: `161`,
    338: `161`,
    339: `161`,
    34: `14`,
    340: `161`,
    341: `161`,
    342: `161`,
    343: `161`,
    344: `161`,
    345: `161`,
    346: `162`,
    347: `162`,
    348: `163`,
    349: `164`,
    35: `15`,
    350: `165`,
    351: `165`,
    352: `166`,
    353: `166`,
    354: `167`,
    355: `167`,
    356: `168`,
    357: `168`,
    358: `169`,
    359: `170`,
    36: `16`,
    360: `170`,
    361: `171`,
    362: `171`,
    363: `172`,
    364: `172`,
    365: `173`,
    366: `173`,
    367: `174`,
    368: `175`,
    369: `175`,
    37: `18`,
    370: `176`,
    371: `177`,
    372: `178`,
    373: `179`,
    374: `179`,
    375: `180`,
    376: `181`,
    377: `182`,
    378: `182`,
    379: `183`,
    38: `18`,
    380: `184`,
    381: `184`,
    382: `185`,
    383: `185`,
    384: `186`,
    385: `186`,
    386: `188`,
    387: `188`,
    388: `189`,
    389: `189`,
    39: `18`,
    390: `189`,
    391: `190`,
    392: `190`,
    393: `192`,
    394: `192`,
    395: `193`,
    396: `193`,
    397: `193`,
    398: `194`,
    399: `194`,
    4: `2`,
    40: `18`,
    400: `195`,
    401: `195`,
    402: `195`,
    403: `196`,
    404: `197`,
    405: `199`,
    406: `199`,
    407: `200`,
    408: `200`,
    409: `201`,
    41: `18`,
    410: `201`,
    411: `201`,
    412: `203`,
    413: `204`,
    414: `204`,
    415: `205`,
    416: `205`,
    417: `206`,
    418: `206`,
    419: `207`,
    42: `18`,
    420: `207`,
    421: `207`,
    422: `209`,
    423: `209`,
    424: `210`,
    425: `210`,
    426: `211`,
    427: `212`,
    428: `214`,
    429: `214`,
    43: `18`,
    430: `214`,
    431: `216`,
    432: `217`,
    433: `217`,
    434: `218`,
    435: `218`,
    436: `219`,
    437: `219`,
    438: `219`,
    439: `221`,
    44: `18`,
    440: `221`,
    441: `222`,
    442: `222`,
    443: `222`,
    444: `224`,
    445: `224`,
    446: `224`,
    447: `224`,
    448: `224`,
    449: `224`,
    45: `18`,
    450: `225`,
    451: `225`,
    452: `226`,
    453: `227`,
    454: `229`,
    455: `230`,
    456: `232`,
    457: `232`,
    458: `233`,
    459: `233`,
    46: `18`,
    460: `233`,
    461: `234`,
    462: `235`,
    463: `236`,
    464: `237`,
    465: `237`,
    466: `238`,
    467: `239`,
    468: `240`,
    469: `244`,
    47: `18`,
    470: `244`,
    471: `245`,
    472: `245`,
    473: `245`,
    474: `246`,
    475: `247`,
    476: `247`,
    477: `248`,
    478: `249`,
    479: `250`,
    48: `18`,
    480: `251`,
    481: `251`,
    482: `252`,
    483: `252`,
    484: `253`,
    485: `254`,
    486: `258`,
    487: `258`,
    488: `260`,
    489: `260`,
    49: `18`,
    490: `262`,
    491: `262`,
    492: `263`,
    493: `263`,
    494: `263`,
    495: `264`,
    496: `265`,
    497: `265`,
    498: `266`,
    499: `266`,
    5: `2`,
    50: `18`,
    500: `266`,
    501: `266`,
    502: `266`,
    503: `266`,
    504: `266`,
    505: `266`,
    506: `266`,
    507: `266`,
    508: `267`,
    509: `267`,
    51: `18`,
    510: `268`,
    511: `269`,
    512: `270`,
    513: `270`,
    514: `271`,
    515: `271`,
    516: `272`,
    517: `272`,
    518: `273`,
    519: `273`,
    52: `18`,
    520: `274`,
    521: `275`,
    522: `275`,
    523: `276`,
    524: `276`,
    525: `277`,
    526: `277`,
    527: `278`,
    528: `278`,
    529: `279`,
    53: `18`,
    530: `279`,
    531: `280`,
    532: `281`,
    533: `282`,
    534: `282`,
    535: `283`,
    536: `283`,
    537: `284`,
    538: `284`,
    539: `285`,
    54: `18`,
    540: `285`,
    541: `286`,
    542: `286`,
    543: `287`,
    544: `287`,
    545: `287`,
    546: `289`,
    547: `289`,
    548: `290`,
    549: `291`,
    55: `18`,
    550: `292`,
    551: `295`,
    552: `295`,
    553: `295`,
    554: `296`,
    555: `296`,
    556: `297`,
    557: `298`,
    558: `298`,
    559: `300`,
    56: `18`,
    560: `300`,
    561: `301`,
    562: `302`,
    563: `303`,
    564: `305`,
    565: `305`,
    566: `305`,
    567: `307`,
    568: `307`,
    569: `308`,
    57: `18`,
    570: `309`,
    571: `310`,
    572: `310`,
    573: `310`,
    574: `311`,
    575: `311`,
    576: `312`,
    577: `313`,
    578: `314`,
    579: `317`,
    58: `18`,
    580: `317`,
    581: `317`,
    582: `318`,
    583: `318`,
    584: `319`,
    585: `320`,
    586: `320`,
    587: `321`,
    588: `321`,
    589: `321`,
    59: `18`,
    590: `323`,
    591: `323`,
    592: `324`,
    593: `325`,
    594: `326`,
    595: `326`,
    596: `326`,
    597: `327`,
    598: `327`,
    599: `328`,
    6: `2`,
    60: `18`,
    600: `329`,
    601: `330`,
    602: `333`,
    603: `333`,
    604: `333`,
    605: `334`,
    606: `334`,
    607: `335`,
    608: `336`,
    609: `336`,
    61: `18`,
    610: `337`,
    611: `337`,
    612: `337`,
    613: `339`,
    614: `339`,
    615: `340`,
    616: `341`,
    617: `342`,
    618: `342`,
    619: `342`,
    62: `18`,
    620: `343`,
    621: `343`,
    622: `344`,
    623: `345`,
    624: `346`,
    625: `349`,
    626: `349`,
    627: `349`,
    628: `350`,
    629: `350`,
    63: `18`,
    630: `351`,
    631: `352`,
    632: `352`,
    633: `353`,
    634: `353`,
    635: `353`,
    636: `355`,
    637: `355`,
    638: `356`,
    639: `356`,
    64: `18`,
    640: `357`,
    641: `357`,
    642: `358`,
    643: `359`,
    644: `360`,
    645: `360`,
    646: `361`,
    647: `361`,
    648: `362`,
    649: `363`,
    65: `18`,
    650: `364`,
    651: `364`,
    652: `365`,
    653: `365`,
    654: `366`,
    655: `366`,
    656: `367`,
    657: `368`,
    658: `368`,
    659: `369`,
    66: `18`,
    660: `369`,
    661: `370`,
    662: `370`,
    663: `371`,
    664: `372`,
    665: `372`,
    666: `373`,
    667: `373`,
    668: `373`,
    669: `373`,
    67: `18`,
    670: `373`,
    671: `373`,
    672: `374`,
    673: `374`,
    674: `375`,
    675: `376`,
    676: `377`,
    677: `377`,
    678: `378`,
    679: `379`,
    68: `18`,
    680: `380`,
    681: `380`,
    682: `381`,
    683: `382`,
    684: `383`,
    685: `383`,
    686: `384`,
    687: `385`,
    688: `386`,
    689: `388`,
    69: `18`,
    690: `388`,
    691: `389`,
    692: `389`,
    693: `389`,
    694: `390`,
    695: `390`,
    696: `391`,
    697: `392`,
    698: `393`,
    699: `393`,
    7: `2`,
    70: `18`,
    700: `394`,
    701: `395`,
    702: `395`,
    703: `395`,
    704: `396`,
    705: `397`,
    706: `398`,
    707: `398`,
    708: `399`,
    709: `399`,
    71: `18`,
    710: `400`,
    711: `400`,
    712: `401`,
    713: `402`,
    714: `403`,
    715: `403`,
    716: `404`,
    717: `405`,
    718: `405`,
    719: `406`,
    72: `18`,
    720: `406`,
    721: `407`,
    722: `407`,
    723: `408`,
    724: `408`,
    725: `408`,
    726: `409`,
    727: `411`,
    728: `411`,
    729: `412`,
    73: `18`,
    730: `412`,
    731: `413`,
    732: `413`,
    733: `413`,
    734: `415`,
    735: `415`,
    736: `416`,
    737: `416`,
    738: `417`,
    739: `418`,
    74: `18`,
    740: `419`,
    741: `419`,
    742: `420`,
    743: `421`,
    744: `422`,
    745: `422`,
    746: `423`,
    747: `424`,
    748: `425`,
    749: `425`,
    75: `18`,
    750: `426`,
    751: `427`,
    752: `427`,
    753: `428`,
    754: `429`,
    755: `429`,
    756: `430`,
    757: `431`,
    758: `432`,
    759: `433`,
    76: `18`,
    760: `433`,
    761: `435`,
    762: `435`,
    763: `436`,
    764: `436`,
    765: `437`,
    766: `438`,
    767: `439`,
    768: `439`,
    769: `439`,
    77: `18`,
    770: `440`,
    771: `441`,
    772: `442`,
    773: `442`,
    774: `443`,
    775: `444`,
    776: `444`,
    777: `445`,
    778: `446`,
    779: `447`,
    78: `18`,
    780: `448`,
    781: `448`,
    782: `449`,
    783: `450`,
    784: `451`,
    785: `453`,
    786: `453`,
    787: `453`,
    788: `454`,
    789: `454`,
    79: `18`,
    790: `454`,
    791: `456`,
    792: `457`,
    793: `457`,
    794: `458`,
    795: `459`,
    796: `460`,
    797: `460`,
    798: `460`,
    799: `461`,
    8: `2`,
    80: `18`,
    800: `461`,
    801: `462`,
    802: `463`,
    803: `463`,
    804: `464`,
    805: `464`,
    806: `464`,
    807: `464`,
    808: `464`,
    809: `464`,
    81: `18`,
    810: `465`,
    811: `465`,
    812: `466`,
    813: `467`,
    814: `468`,
    815: `470`,
    816: `470`,
    817: `471`,
    818: `471`,
    819: `471`,
    82: `18`,
    820: `472`,
    821: `472`,
    822: `473`,
    823: `473`,
    824: `474`,
    825: `475`,
    826: `478`,
    827: `479`,
    828: `480`,
    829: `480`,
    83: `18`,
    830: `481`,
    831: `481`,
    832: `482`,
    833: `483`,
    834: `483`,
    835: `484`,
    836: `484`,
    837: `485`,
    838: `485`,
    839: `486`,
    84: `19`,
    840: `486`,
    841: `487`,
    842: `487`,
    843: `488`,
    844: `488`,
    845: `488`,
    846: `490`,
    847: `490`,
    848: `490`,
    849: `491`,
    85: `19`,
    850: `491`,
    851: `492`,
    852: `492`,
    853: `492`,
    854: `493`,
    855: `493`,
    856: `493`,
    857: `494`,
    858: `494`,
    859: `495`,
    86: `19`,
    860: `495`,
    861: `495`,
    862: `497`,
    863: `497`,
    864: `497`,
    865: `498`,
    866: `498`,
    867: `498`,
    868: `499`,
    869: `499`,
    87: `20`,
    870: `500`,
    871: `500`,
    872: `500`,
    873: `502`,
    874: `502`,
    875: `502`,
    876: `503`,
    877: `503`,
    878: `503`,
    879: `504`,
    88: `20`,
    880: `504`,
    881: `505`,
    882: `505`,
    883: `505`,
    884: `507`,
    885: `508`,
    886: `508`,
    887: `509`,
    888: `510`,
    889: `511`,
    89: `20`,
    890: `511`,
    891: `512`,
    892: `512`,
    893: `513`,
    894: `514`,
    895: `515`,
    896: `516`,
    897: `516`,
    898: `517`,
    899: `518`,
    9: `2`,
    90: `20`,
    900: `519`,
    901: `520`,
    902: `520`,
    903: `521`,
    904: `522`,
    905: `523`,
    906: `523`,
    907: `523`,
    908: `524`,
    909: `524`,
    91: `20`,
    910: `525`,
    911: `526`,
    912: `527`,
    913: `528`,
    914: `528`,
    915: `528`,
    916: `530`,
    917: `530`,
    918: `530`,
    919: `532`,
    92: `20`,
    920: `532`,
    921: `532`,
    922: `534`,
    923: `534`,
    924: `534`,
    925: `536`,
    926: `537`,
    927: `537`,
    928: `539`,
    929: `539`,
    93: `20`,
    930: `540`,
    931: `540`,
    932: `541`,
    933: `542`,
    934: `543`,
    935: `543`,
    936: `544`,
    937: `545`,
    938: `546`,
    939: `546`,
    94: `20`,
    940: `547`,
    941: `548`,
    942: `549`,
    943: `549`,
    944: `550`,
    945: `551`,
    946: `551`,
    947: `552`,
    948: `553`,
    949: `553`,
    95: `20`,
    950: `553`,
    951: `554`,
    952: `555`,
    953: `555`,
    954: `556`,
    955: `557`,
    956: `558`,
    957: `558`,
    958: `559`,
    959: `560`,
    96: `20`,
    960: `560`,
    961: `561`,
    962: `562`,
    963: `563`,
    964: `564`,
    965: `564`,
    966: `565`,
    967: `565`,
    968: `565`,
    969: `567`,
    97: `20`,
    970: `568`,
    971: `568`,
    972: `569`,
    973: `570`,
    974: `570`,
    975: `571`,
    976: `571`,
    977: `572`,
    978: `572`,
    979: `573`,
    98: `20`,
    980: `574`,
    981: `576`,
    982: `577`,
    983: `577`,
    984: `578`,
    985: `579`,
    986: `579`,
    987: `580`,
    988: `580`,
    989: `581`,
    99: `20`,
    990: `581`,
    991: `582`,
    992: `582`,
    993: `583`,
    994: `584`,
    995: `586`,
    996: `586`,
    997: `587`,
    998: `588`,
    999: `589`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T11","name":"v1155","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_UserAPI_bridgeToken0_60","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_UserAPI_unbridgeToken0_60","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v592","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v730","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1139","type":"uint256"},{"internalType":"address payable","name":"v1140","type":"address"}],"name":"UserAPI_bridgeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1149","type":"uint256"},{"internalType":"address payable","name":"v1150","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"v1151","type":"tuple"},{"internalType":"uint256","name":"v1152","type":"uint256"}],"name":"UserAPI_unbridgeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T12","name":"v1158","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_UserAPI_bridgeToken0_60","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_UserAPI_unbridgeToken0_60","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v1161","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"bridgedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sourceToken","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200253838819003918201601f19168301916001600160401b03831184841017620004dd57808492608094604052833981010312620006055760405190608082016001600160401b03811183821017620004dd57604052805182526020810151906001600160a01b03821682036200060557606091602084015260408101516040840152015160608201524360035560405160e0810181811060018060401b03821117620004dd5760009160c0916040528281528260208201528260408201528260608201528260808201528260a0820152015260405190620000e6826200060a565b620000f062000642565b8252620000fc62000663565b60208301526040516200010f8162000626565b6020368237604083015260ff60045416620005ec577f6325dde25bfa6ff85dd776156bfdeeefc36ff7c4a07f10fdc0c4fb6b1f92fb9760a060405133815283516020820152600180831b0360208501511660408201526040840151606082015260608401516080820152a180518015908115620005df575b5015620005c6576000825152600060208351015260006040835101528151602083015152600060408301515234620005ad576040519060c082016001600160401b03811183821017620004dd5760405260008252600060208301526000604083015260006060830152620001fa62000663565b60808301526040516200020d8162000626565b602036823760a083015233825260018060a01b036020820151166020830152604081015160408301526060810151606083015260208301519283516040602082015191015115156040519162000263836200060a565b60008352602083015260408201526200027b62000663565b9060005b60018110620005755750815260808401526040908101516020909201519051916001600160a01b039190911690620002b78362000626565b602036843760005b6001811062000541575050815260a08201526001600055436001556040519060018060a01b03815116602083015260018060a01b0360208201511660408301526040810151606083015260608101516080830152608081015160a083016000905b6001821062000514578460a0850151610100908183016000905b60018210620004f357505050815261012081016001600160401b03811182821017620004dd5760405280516001600160401b038111620004dd57600254600181811c91168015620004d2575b6020821014620004bc57601f811162000452575b50602091601f8211600114620003e857918192600092620003dc575b50508160011b916000199060031b1c1916176002555b604051611e4e9081620006ea8239f35b015190508280620003b6565b601f19821692600260005260206000209160005b85811062000439575083600195106200041f575b505050811b01600255620003cc565b015160001960f88460031b161c1916905582808062000410565b91926020600181928685015181550194019201620003fc565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620004b1575b601f0160051c01905b818110620004a457506200039a565b6000815560010162000495565b90915081906200048c565b634e487b7160e01b600052602260045260246000fd5b90607f169062000386565b634e487b7160e01b600052604160045260246000fd5b82516001600160a01b0316815260209283019260019290920191016200033a565b60206060600192604086518051835284810151858401520151151560408201520193019101909162000320565b6200056f906001600160a01b036200055a82856200069b565b51166200056882876200069b565b52620006c3565b620002bf565b8062000586620005a792896200069b565b516200059382866200069b565b52620005a081856200069b565b50620006c3565b6200027f565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b9050600154143862000187565b60405163100960cb60e01b8152600e6004820152602490fd5b600080fd5b606081019081106001600160401b03821117620004dd57604052565b602081019081106001600160401b03821117620004dd57604052565b6040519062000651826200060a565b60006040838281528260208201520152565b60405190620006728262000626565b8160005b6020811062000683575050565b6020906200069062000642565b818401520162000676565b906001811015620006ad5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6000198114620006d35760010190565b634e487b7160e01b600052601160045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c806309eb5248146100f457806313ea89a8146100eb578063146ffb26146100e25780631e93b0f1146100d95780633bc4a658146100d05780633e483d43146100c7578063573b8510146100be5780635f8aaa69146100b557806383230757146100ac578063ab53f2c6146100a35763b49673940361000e5761009e610761565b61000e565b5061009e6106ec565b5061009e6106cd565b5061009e6105fc565b5061009e61049c565b5061009e6103ea565b5061009e6102eb565b5061009e6102af565b5061009e610210565b5061009e6101a4565b5061012036600319011261019f5761010a61099e565b6040908151906101198261080f565b600435825261010036602319011261019f5782519161013783610837565b602435600281101561019f5783528360431936011261019f5761019192845161015f8161080f565b6044358152606435610170816102da565b6020820152602082015261018336611d8d565b858201526020820152610df1565b5160008152602090f35b0390f35b600080fd5b503461019f57600036600319011261019f576101be61099e565b6004600054036101f757606060209160c06101e86101da6108c6565b858082518301019101610bd0565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b503461019f57600036600319011261019f5761019b60a061022f61099e565b600054600481101561027c576001610247911461132d565b60406102636102546108c6565b60208082518301019101611cfa565b0151828201525b01516040519081529081906020820190565b6004610288911461130d565b60406102a46102956108c6565b60208082518301019101610bd0565b01518282015261026a565b503461019f57600036600319011261019f576020600354604051908152f35b6001600160a01b031690565b6001600160a01b0381160361019f57565b5060a036600319011261019f57602435610304816102da565b60408060431936011261019f576103d98161019b936103d261032461099e565b809261032e610a1c565b60043581526001600160a01b039091166020820190815285820161035136611cc1565b81526060830190608435825261039c61039289519461036f8661080f565b610377610a1c565b86526020860196610386610a48565b885251865152516102ce565b6020855101610a0d565b518783510152516060825101526103b4825160019052565b5185825101526103c2610a96565b9060008252516020820152610df1565b0151151590565b905190151581529081906020820190565b50604036600319011261019f5761019b61048a602435610409816102da565b61041161099e565b6103d28161041d6109f4565b60043581526001600160a01b039485166020808301918252604051909690916104458361080f565b61044d6109f4565b83528783019361045b610a48565b85525183515251168682510152600082515251858251015261047b610a96565b90600082525185820152610df1565b60405190151581529081906020820190565b50602036600319011261019f576104b161099e565b506105e46040516104c181610852565b60043581526104d460016000541461134d565b6105416104e26102546108c6565b916104fe6104f96104f560045460ff1690565b1590565b61136d565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a15180159081156105f0575b5061138d565b61054b34156113ad565b6105673360018060a01b0361056084516102ce565b16146113cd565b6080610571610d6f565b9161058561057f82516102ce565b84610a0d565b61059e61059560208301516102ce565b60208501610a0d565b604081015160408401526060810151606084015260a081015182840152600060a0840152600060c08401524360e084015201516101008201526000610120820152611b77565b60405160008152602090f35b9050600154143861053b565b503461019f57600036600319011261019f5761019b610674608061061e61099e565b600054600481101561068e576001610636911461140d565b61066d61066560206106576106496108c6565b828082518301019101611cfa565b01516001600160a01b031690565b838301610a0d565b01516102ce565b6040516001600160a01b0390911681529081906020820190565b600461069a91146113ed565b6106a26108c6565b80516001600160a01b03916020916106c1919081018301908301610bd0565b0151168282015261066d565b503461019f57600036600319011261019f576020600154604051908152f35b503461019f5760008060031936011261075e5780546107096108c6565b906040519283918252602090604082840152835191826040850152815b83811061074757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610726565b80fd5b503461019f57600036600319011261019f5761019b60c061078061099e565b60005460048110156107a5576001610798911461144d565b60606102636102546108c6565b60046107b1911461142d565b60606102a46102956108c6565b90600182811c921680156107ee575b60208310146107d857565b634e487b7160e01b600052602260045260246000fd5b91607f16916107cd565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761082a57604052565b6108326107f8565b604052565b606081019081106001600160401b0382111761082a57604052565b602081019081106001600160401b0382111761082a57604052565b608081019081106001600160401b0382111761082a57604052565b60a081019081106001600160401b0382111761082a57604052565b601f909101601f19168101906001600160401b0382119082101761082a57604052565b60405190600082600254916108da836107be565b8083526001938085169081156109505750600114610902575b50610900925003836108a3565b565b60026000908152600080516020611e2283398151915294602093509091905b8183106109385750506109009350820101386108f3565b85548884018501529485019487945091830191610921565b905061090094506020925060ff191682840152151560051b820101386108f3565b6040519061012082016001600160401b0381118382101761082a57604052565b6040519061090082610837565b6040519060e082016001600160401b038111838210176109e7575b6040528160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b6109ef6107f8565b6109b9565b60405190610a018261080f565b60006020838281520152565b6001600160a01b039091169052565b60405190610a298261086d565b6000606083828152826020820152610a3f6109f4565b60408201520152565b60405190610a5582610837565b8160008152610a626109f4565b60208201526040610a71610a1c565b910152565b60021115610a8057565b634e487b7160e01b600052602160045260246000fd5b60405190610aa38261080f565b81600081526020610a71610a48565b60405190610abf8261086d565b81610ac86109f4565b8152610ad2610a1c565b6020820152610adf6109f4565b60408201526060610a716109f4565b5190610900826102da565b81601f8201121561019f5760405191610b1183610852565b8260209283810192831161019f57905b828210610b2f575050505090565b8380918351610b3d816102da565b815201910190610b21565b5190811515820361019f57565b9080601f8301121561019f57604091825192610b7084610852565b836060938484019381851161019f57915b848310610b915750505050505090565b858383031261019f5783518691610ba782610837565b845182526020918286015183820152610bc1878701610b48565b87820152815201920191610b81565b6101608183031261019f5761014090610c51610bea610971565b93610bf483610aee565b8552610c0260208401610aee565b60208601526040830151604086015260608301516060860152610c288160808501610af9565b6080860152610c3960a08401610b48565b60a086015260c083015160c086015260e08301610b55565b60e0840152015161010082015290565b6001600160a01b039182168152825160208083019190915292830151805161014083019594929390926002841015610a8057604060609361012095828801528383808301518051888b01520151166080880152015191825160a0870152818301511660c0860152604082015190815160e0870152600180851b0319910151166101008501520151910152565b516002811015610a805790565b906001811015610d0b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040805191610d2f83610852565b8291600090815b602080821015610d66579060209184845191610d5183610837565b81835282015284848201528188015201610d36565b50505050909150565b6040519061014082016001600160401b03811183821017610de4575b60405281610120600091828152826020820152826040820152826060820152604051610db681610852565b602036823760808201528260a08201528260c08201528260e0820152610dda610d21565b6101008201520152565b610dec6107f8565b610d8b565b90610dfa610ab2565b90610e0960046000541461146d565b610e146102956108c6565b90610e2c610e276104f560045460ff1690565b61148d565b60206040947fb6ab7ec55424ded9714d693a3b34da00da98e78539004c3f807b8122d56ac288865180610e60843383610c61565b0390a1610e78815180159081156112b0575b506114ad565b01610e838151610ced565b610e8c81610a76565b61111c5793600060206110dc9381610900985101518752610ead341561154d565b828488015152600182858901510152610eca606088015160019052565b828260608901510152610ef4610eef610ee5848901516102ce565b8951519033611735565b61156d565b610f01875151151561158d565b8351600081527ffa987af9b0ccf5c9be8c0eca36c7e323ac5c85a6ca10bcdda26933dff3c0fcc790602090a10152610f37610d6f565b93610f4b610f4585516102ce565b86610a0d565b610f64610f5b60208601516102ce565b60208701610a0d565b81840151828601526060840151606086015260808401516080860152610f99610f9060a0860151151590565b151560a0870152565b610faa60c0850151825151906112d3565b60c08601524360e086015260e08401516110d760018060a01b0360808701515116610fe0610fdb60208901516102ce565b6102ce565b1492831561111157602060608201515b015193156111035761100b602060608301515b015184610cfa565b515181515101946110bd816110b58a6020838161106960e085015161103b608087015160018060a01b0390511690565b61104a610fdb858901516102ce565b6001600160a01b03909116036110f9578260608c01515b015190610cfa565b5101519760e084015193611097610fdb8561108f608085015160018060a01b0390511690565b9301516102ce565b6001600160a01b03909116036110f257606091500151015190610cfa565b510151151590565b916110c6610991565b968752602087015285019015159052565b6117d5565b9061010091828401520151610120820152611b77565b0151611061565b82848c0151611061565b61100b602086830151611003565b602085820151610ff0565b909293600161112b8351610ced565b61113481610a76565b14611141575b5050505050565b6112a6946020826110dc94510151910190815261115e34156114cd565b6112a1602085019561118161117c61117689516102ce565b336116da565b6114ed565b61118e835151151561150d565b60008460e08801926111a784515151875151111561152d565b6111bf6111b48b516102ce565b8751519033906115ad565b8151600081527f14121a27f581204bf52a127935346b9db1c6eee5a65a2aad7034014245e04cee90602090a1015261121e6112156111fb610d6f565b9861120f6112098a516102ce565b8b610a0d565b516102ce565b60208901610a0d565b8386015184880152606086015160608801526080860151608088015261125361124a60a0880151151590565b151560a0890152565b61126460c0870151845151906112f5565b60c08801524360e088015251918251908151905151900393806020830151920151151591611290610991565b958652602086015284019015159052565b611778565b388080808061113a565b90506001541438610e72565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116112e8575b821061019f57565b6112f06112bc565b6112e0565b9081039081116113025790565b61130a6112bc565b90565b1561131457565b60405163100960cb60e01b8152600b6004820152602490fd5b1561133457565b60405163100960cb60e01b8152600a6004820152602490fd5b1561135457565b60405163100960cb60e01b815260116004820152602490fd5b1561137457565b60405163100960cb60e01b815260126004820152602490fd5b1561139457565b60405163100960cb60e01b815260136004820152602490fd5b156113b457565b60405163100960cb60e01b815260146004820152602490fd5b156113d457565b60405163100960cb60e01b815260156004820152602490fd5b156113f457565b60405163100960cb60e01b815260096004820152602490fd5b1561141457565b60405163100960cb60e01b815260086004820152602490fd5b1561143457565b60405163100960cb60e01b8152600d6004820152602490fd5b1561145457565b60405163100960cb60e01b8152600c6004820152602490fd5b1561147457565b60405163100960cb60e01b815260166004820152602490fd5b1561149457565b60405163100960cb60e01b815260176004820152602490fd5b156114b457565b60405163100960cb60e01b815260186004820152602490fd5b156114d457565b60405163100960cb60e01b8152601c6004820152602490fd5b156114f457565b60405163100960cb60e01b8152601d6004820152602490fd5b1561151457565b60405163100960cb60e01b8152601e6004820152602490fd5b1561153457565b60405163100960cb60e01b8152601f6004820152602490fd5b1561155457565b60405163100960cb60e01b815260196004820152602490fd5b1561157457565b60405163100960cb60e01b8152601a6004820152602490fd5b1561159457565b60405163100960cb60e01b8152601b6004820152602490fd5b6000919061161293838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526115eb8161086d565b5193165af16116026115fb611619565b809261167a565b5060208082518301019101611666565b1561019f57565b3d15611661573d906001600160401b038211611654575b60405191611648601f8201601f1916602001846108a3565b82523d6000602084013e565b61165c6107f8565b611630565b606090565b9081602091031261019f5761130a90610b48565b156116825790565b80511561169157805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156116b25790565b8051156116c157805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600061130a928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261171e81610888565b5193165af161160261172e611619565b80926116aa565b60009161130a9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261171e81610888565b9190611782610d21565b9260005b600181106117945750508252565b806117a160019284610cfa565b516117ac8288610cfa565b526117b78187610cfa565b5060001981146117c8575b01611786565b6117d06112bc565b6117c2565b92916117df610d21565b9360005b6001811061180657505090611803916117fc8286610cfa565b5283610cfa565b50565b8061181360019284610cfa565b5161181e8289610cfa565b526118298188610cfa565b50600019811461183a575b016117e3565b6118426112bc565b611834565b6040519061012082016001600160401b038111838210176118b5575b6040528161010060009182815282602082015282604082015282606082015260405161188e81610852565b602036823760808201528260a08201528260c08201526118ac610d21565b60e08201520152565b6118bd6107f8565b611863565b6000915b600183106118d357505050565b81516001600160a01b0316815260019290920191602091820191016118c6565b6000915b6001831061190457505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906118f7565b81516001600160a01b039081168252602080840151909116908201526101608101929161014090610100906040810151604085015260608101516060850152611984608082015160808601906118c2565b60a08181015115159085015260c081015160c08501526119ac60e082015160e08601906118f3565b0151910152565b8181106119be575050565b600081556001016119b3565b90601f82116119d7575050565b6109009160026000526020600020906020601f840160051c83019310611a05575b601f0160051c01906119b3565b90915081906119f8565b80519091906001600160401b038111611ae5575b611a3781611a326002546107be565b6119ca565b602080601f8311600114611a735750819293600092611a68575b50508160011b916000199060031b1c191617600255565b015190503880611a51565b6002600052601f19831694909190600080516020611e22833981519152926000905b878210611acd575050836001959610611ab4575b505050811b01600255565b015160001960f88460031b161c19169055388080611aa9565b80600185968294968601518155019501930190611a95565b611aed6107f8565b611a23565b506040513d6000823e3d90fd5b611b0a6002546107be565b80611b125750565b601f8111600114611b2557506000600255565b6002600052611b6a90601f0160051c600080516020611e22833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6119b3565b6000602081208160025555565b60a081015115611c0857806000808080611b97610fdb611bdc97516102ce565b61012086015190828215611bff575bf115611bf2575b611bba60208201516102ce565b610100611bc783516102ce565b9201515151916001600160a01b0316906115ad565b60008055611bea6000600155565b610900611aff565b611bfa611af2565b611bad565b506108fc611ba6565b611cae611cbc61090092611c1a611847565b90611c2e611c2882516102ce565b83610a0d565b611c47611c3e60208301516102ce565b60208401610a0d565b604081015160408301526060810151606083015260808101516080830152600060a083015260c081015160c0830152610120610100918281015160e0850152015190820152611c966004600055565b611c9f43600155565b60405192839160208301611933565b03601f1981018352826108a3565b611a0f565b604090604319011261019f5760405190611cda8261080f565b6044358252606435826001600160601b03198216820361019f5760200152565b906101008282031261019f5760405191611d78919060e09060c085016001600160401b03811186821017611d80575b6040528051611d37816102da565b85526020810151611d47816102da565b60208601526040810151604086015260608101516060860152611d6d8360808301610b55565b608086015201610af9565b60a082015290565b611d886107f8565b611d29565b9060a060831983011261019f57604051608081016001600160401b03811182821017611e14575b60405260408193608435835260a435611dcc816102da565b602084015260c319011261019f57604051611de68161080f565b60c435815260e4356001600160601b03198116810361019f5760208201526040820152606061010435910152565b611e1c6107f8565b611db456fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 9528,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './lock.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './lock.rsh:84:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './lock.rsh:44:46:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "UserAPI_bridgeToken": UserAPI_bridgeToken,
  "UserAPI_unbridgeToken": UserAPI_unbridgeToken
  };
export const _APIs = {
  UserAPI: {
    bridgeToken: UserAPI_bridgeToken,
    unbridgeToken: UserAPI_unbridgeToken
    }
  };

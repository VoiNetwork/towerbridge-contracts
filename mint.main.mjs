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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const _sourceChainId = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v485, v486, v487, v492, v497, v510, v516] = svs;
      return (await ((async () => {
        
        
        return v487;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v487;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _sourceTokenId = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v485, v486, v487, v492, v497, v510, v516] = svs;
      return (await ((async () => {
        
        
        return v486;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v486;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wrappedToken = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v485, v486, v487, v492, v497, v510, v516] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wrappedTokenMinted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v485, v486, v487, v492, v497, v510, v516] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v523;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wrappedTokenSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v485, v486, v487, v492, v497, v510, v516] = svs;
      return (await ((async () => {
        
        
        return v492;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v492;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      sourceChainId: {
        decode: _sourceChainId,
        dom: [],
        rng: ctc1
        },
      sourceTokenId: {
        decode: _sourceTokenId,
        dom: [],
        rng: ctc1
        },
      wrappedToken: {
        decode: _wrappedToken,
        dom: [],
        rng: ctc2
        },
      wrappedTokenMinted: {
        decode: _wrappedTokenMinted,
        dom: [],
        rng: ctc1
        },
      wrappedTokenSupply: {
        decode: _wrappedTokenSupply,
        dom: [],
        rng: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc3, ctc6],
      4: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc3, ctc4, ctc1, ctc6, ctc1]
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc4 = stdlib.T_Object({
    sourceChainId: ctc0,
    sourceTokenId: ctc0,
    w_decimals: ctc0,
    w_metadata: ctc1,
    w_name: ctc1,
    w_supply: ctc0,
    w_symbol: ctc2,
    w_url: ctc3
    });
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '52'));
  const ctc10 = stdlib.T_Tuple([ctc0, ctc7, ctc9, ctc0]);
  const ctc11 = stdlib.T_Data({
    UserAPI_burnToken0_93: ctc8,
    UserAPI_mintToken0_93: ctc10
    });
  const ctc12 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc0, ctc0, ctc13]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v462 = [v461];
  const v463 = [stdlib.Token_zero];
  const v466 = stdlib.protect(ctc4, interact.parameters, 'for Deployer\'s interact field parameters');
  const v467 = v466.sourceChainId;
  const v468 = v466.sourceTokenId;
  const v469 = v466.w_decimals;
  const v470 = v466.w_metadata;
  const v471 = v466.w_name;
  const v472 = v466.w_supply;
  const v473 = v466.w_symbol;
  const v474 = v466.w_url;
  
  const txn1 = await (ctc.sendrecv({
    args: [v468, v467, v471, v473, v474, v470, v472, v469],
    evt_cnt: 8,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./mint.rsh:38:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./mint.rsh:38:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v486, v487, v488, v489, v490, v491, v492, v493], secs: v495, time: v494, didSend: v50, from: v485 } = txn1;
      
      ;
      const v496 = stdlib.simTokenNew(sim_r, v488, v489, v490, v491, v492, v493, getSimTokCtr());
      const v497 = await txn1.getOutput('internal', 'v496', ctc5, v496);
      const v507 = v462[stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0')];
      const v508 = stdlib.Array_set(v507, '0', v492);
      const v509 = stdlib.Array_set(v462, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v508);
      const v510 = stdlib.Array_set(v463, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v497);
      const v511 = v509[stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0')];
      const v512 = stdlib.Array_set(v511, '1', v492);
      const v513 = stdlib.Array_set(v509, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v512);
      const v514 = v513[stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0')];
      const v515 = stdlib.Array_set(v514, '2', false);
      const v516 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v515);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v486, v487, v488, v489, v490, v491, v492, v493], secs: v495, time: v494, didSend: v50, from: v485 } = txn1;
  ;
  const v496 = undefined /* TokenNew */;
  const v497 = await txn1.getOutput('internal', 'v496', ctc5, v496);
  const v507 = v462[stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0')];
  const v508 = stdlib.Array_set(v507, '0', v492);
  const v509 = stdlib.Array_set(v462, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v508);
  const v510 = stdlib.Array_set(v463, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v497);
  const v511 = v509[stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0')];
  const v512 = stdlib.Array_set(v511, '1', v492);
  const v513 = stdlib.Array_set(v509, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v512);
  const v514 = v513[stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0')];
  const v515 = stdlib.Array_set(v514, '2', false);
  const v516 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./mint.rsh:45:35:application', stdlib.UInt_max, '0'), v515);
  stdlib.protect(ctc6, await interact.ready(), {
    at: './mint.rsh:50:28:application',
    fs: ['at ./mint.rsh:50:28:application call to [unknown function] (defined at: ./mint.rsh:50:28:function exp)', 'at ./mint.rsh:50:28:application call to "liftedInteract" (defined at: ./mint.rsh:50:28:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v485, v486, v487, v492, v497, v510, v516],
    evt_cnt: 0,
    funcNum: 1,
    lct: v494,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./mint.rsh:51:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v520, time: v519, didSend: v73, from: v518 } = txn2;
      
      ;
      const v522 = false;
      const v523 = stdlib.checkedBigNumberify('./mint.rsh:53:56:decimal', stdlib.UInt_max, '0');
      const v524 = v519;
      const v530 = v516;
      const v531 = stdlib.checkedBigNumberify('./mint.rsh:33:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v539 = v530[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
        const v540 = v539[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
        const v541 = v540 ? false : true;
        const v542 = v522 ? v541 : true;
        
        return v542;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v830 = v530[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
        const v831 = v830[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v485,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v485,
          tok: v497
          });
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
    tys: [ctc7, ctc0, ctc0, ctc0, ctc5, ctc12, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v520, time: v519, didSend: v73, from: v518 } = txn2;
  ;
  const v521 = stdlib.addressEq(v485, v518);
  stdlib.assert(v521, {
    at: './mint.rsh:51:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  let v522 = false;
  let v523 = stdlib.checkedBigNumberify('./mint.rsh:53:56:decimal', stdlib.UInt_max, '0');
  let v524 = v519;
  let v530 = v516;
  let v531 = stdlib.checkedBigNumberify('./mint.rsh:33:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v539 = v530[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
    const v540 = v539[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
    const v541 = v540 ? false : true;
    const v542 = v522 ? v541 : true;
    
    return v542;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v606], secs: v608, time: v607, didSend: v288, from: v605 } = txn4;
    switch (v606[0]) {
      case 'UserAPI_burnToken0_93': {
        const v609 = v606[1];
        undefined /* setApiDetails */;
        const v614 = v609[stdlib.checkedBigNumberify('./mint.rsh:78:13:spread', stdlib.UInt_max, '0')];
        ;
        const v853 = v510[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '0')];
        const v859 = stdlib.tokenEq(v853, v497);
        const v862 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v863 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v864 = v859 ? v863 : v862;
        const v652 = v864[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '1')];
        const v654 = v530[v652];
        const v655 = v654[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '0')];
        const v656 = stdlib.add(v655, v614);
        const v673 = stdlib.Array_set(v654, '0', v656);
        const v674 = stdlib.Array_set(v530, v652, v673);
        ;
        const v678 = stdlib.gt(v614, stdlib.checkedBigNumberify('./mint.rsh:85:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v678, {
          at: './mint.rsh:85:24:application',
          fs: ['at ./mint.rsh:84:25:application call to [unknown function] (defined at: ./mint.rsh:84:25:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v679 = null;
        await txn4.getOutput('UserAPI_burnToken', 'v679', ctc6, v679);
        const v687 = stdlib.safeSub(v523, v614);
        const cv522 = v522;
        const cv523 = v687;
        const cv524 = v607;
        const cv530 = v674;
        const cv531 = v531;
        
        v522 = cv522;
        v523 = cv523;
        v524 = cv524;
        v530 = cv530;
        v531 = cv531;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'UserAPI_mintToken0_93': {
        const v719 = v606[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v800 = v719[stdlib.checkedBigNumberify('./mint.rsh:60:13:spread', stdlib.UInt_max, '0')];
        const v804 = stdlib.gt(v800, stdlib.checkedBigNumberify('./mint.rsh:70:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v804, {
          at: './mint.rsh:70:24:application',
          fs: ['at ./mint.rsh:69:31:application call to [unknown function] (defined at: ./mint.rsh:69:31:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v805 = v530[stdlib.checkedBigNumberify('./mint.rsh:71:32:application', stdlib.UInt_max, '0')];
        const v806 = v805[stdlib.checkedBigNumberify('./mint.rsh:71:32:application', stdlib.UInt_max, '0')];
        const v807 = stdlib.ge(v806, v800);
        stdlib.assert(v807, {
          at: './mint.rsh:71:24:application',
          fs: ['at ./mint.rsh:69:31:application call to [unknown function] (defined at: ./mint.rsh:69:31:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v813 = stdlib.sub(v806, v800);
        const v815 = stdlib.Array_set(v805, '0', v813);
        const v816 = stdlib.Array_set(v530, stdlib.checkedBigNumberify('./mint.rsh:72:54:application', stdlib.UInt_max, '0'), v815);
        ;
        const v817 = null;
        await txn4.getOutput('UserAPI_mintToken', 'v817', ctc6, v817);
        const v827 = stdlib.safeAdd(v523, v800);
        const cv522 = v522;
        const cv523 = v827;
        const cv524 = v607;
        const cv530 = v816;
        const cv531 = v531;
        
        v522 = cv522;
        v523 = cv523;
        v524 = cv524;
        v530 = cv530;
        v531 = cv531;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v830 = v530[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
  const v831 = v830[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _UserAPI_burnToken4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_burnToken4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_burnToken4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '52'));
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc8, ctc1]);
  const ctc10 = stdlib.T_Data({
    UserAPI_burnToken0_93: ctc7,
    UserAPI_mintToken0_93: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc3, ctc4, ctc1, ctc6, ctc1]);
  const v569 = stdlib.protect(ctc7, await interact.in(), {
    at: './mint.rsh:1:23:application',
    fs: ['at ./mint.rsh:79:22:application call to [unknown function] (defined at: ./mint.rsh:79:22:function exp)', 'at ./mint.rsh:53:47:application call to "runUserAPI_burnToken0_93" (defined at: ./mint.rsh:78:13:function exp)', 'at ./mint.rsh:53:47:application call to [unknown function] (defined at: ./mint.rsh:53:47:function exp)'],
    msg: 'in',
    who: 'UserAPI_burnToken'
    });
  const v570 = v569[stdlib.checkedBigNumberify('./mint.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v575 = stdlib.gt(v570, stdlib.checkedBigNumberify('./mint.rsh:80:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v575, {
    at: './mint.rsh:80:23:application',
    fs: ['at ./mint.rsh:79:22:application call to [unknown function] (defined at: ./mint.rsh:79:22:function exp)', 'at ./mint.rsh:79:22:application call to [unknown function] (defined at: ./mint.rsh:79:22:function exp)', 'at ./mint.rsh:53:47:application call to "runUserAPI_burnToken0_93" (defined at: ./mint.rsh:78:13:function exp)', 'at ./mint.rsh:53:47:application call to [unknown function] (defined at: ./mint.rsh:53:47:function exp)'],
    msg: 'Amount of token burn must be greater than zero',
    who: 'UserAPI_burnToken'
    });
  const v576 = v530[stdlib.checkedBigNumberify('./mint.rsh:81:31:application', stdlib.UInt_max, '0')];
  const v577 = v576[stdlib.checkedBigNumberify('./mint.rsh:81:31:application', stdlib.UInt_max, '0')];
  const v578 = stdlib.ge(v577, v570);
  stdlib.assert(v578, {
    at: './mint.rsh:81:23:application',
    fs: ['at ./mint.rsh:79:22:application call to [unknown function] (defined at: ./mint.rsh:79:22:function exp)', 'at ./mint.rsh:79:22:application call to [unknown function] (defined at: ./mint.rsh:79:22:function exp)', 'at ./mint.rsh:53:47:application call to "runUserAPI_burnToken0_93" (defined at: ./mint.rsh:78:13:function exp)', 'at ./mint.rsh:53:47:application call to [unknown function] (defined at: ./mint.rsh:53:47:function exp)'],
    msg: 'Not enough wrapped token balance to burn',
    who: 'UserAPI_burnToken'
    });
  const v583 = ['UserAPI_burnToken0_93', v569];
  
  const txn1 = await (ctc.sendrecv({
    args: [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531, v583],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./mint.rsh:83:26:decimal', stdlib.UInt_max, '0'), [[v570, v497]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v606], secs: v608, time: v607, didSend: v288, from: v605 } = txn1;
      
      switch (v606[0]) {
        case 'UserAPI_burnToken0_93': {
          const v609 = v606[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_burnToken"
            });
          const v614 = v609[stdlib.checkedBigNumberify('./mint.rsh:78:13:spread', stdlib.UInt_max, '0')];
          ;
          const v853 = v510[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '0')];
          const v859 = stdlib.tokenEq(v853, v497);
          const v862 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v863 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v864 = v859 ? v863 : v862;
          const v652 = v864[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '1')];
          const v654 = v530[v652];
          const v655 = v654[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '0')];
          const v656 = stdlib.add(v655, v614);
          const v673 = stdlib.Array_set(v654, '0', v656);
          const v674 = stdlib.Array_set(v530, v652, v673);
          sim_r.txns.push({
            amt: v614,
            kind: 'to',
            tok: v497
            });
          const v679 = null;
          const v680 = await txn1.getOutput('UserAPI_burnToken', 'v679', ctc11, v679);
          
          const v687 = stdlib.safeSub(v523, v614);
          const v1185 = v522;
          const v1186 = v687;
          const v1188 = v674;
          const v1189 = v531;
          const v1190 = v674[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
          const v1191 = v1190[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
          const v1192 = v1191 ? false : true;
          const v1193 = v522 ? v1192 : true;
          if (v1193) {
            sim_r.isHalt = false;
            }
          else {
            const v1195 = v1190[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v485,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v485,
              tok: v497
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'UserAPI_mintToken0_93': {
          const v719 = v606[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc3, ctc4, ctc1, ctc6, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v606], secs: v608, time: v607, didSend: v288, from: v605 } = txn1;
  switch (v606[0]) {
    case 'UserAPI_burnToken0_93': {
      const v609 = v606[1];
      undefined /* setApiDetails */;
      const v614 = v609[stdlib.checkedBigNumberify('./mint.rsh:78:13:spread', stdlib.UInt_max, '0')];
      ;
      const v853 = v510[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '0')];
      const v859 = stdlib.tokenEq(v853, v497);
      const v862 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v863 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v864 = v859 ? v863 : v862;
      const v652 = v864[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '1')];
      const v654 = v530[v652];
      const v655 = v654[stdlib.checkedBigNumberify('./mint.rsh:53:47:dot', stdlib.UInt_max, '0')];
      const v656 = stdlib.add(v655, v614);
      const v673 = stdlib.Array_set(v654, '0', v656);
      const v674 = stdlib.Array_set(v530, v652, v673);
      ;
      const v678 = stdlib.gt(v614, stdlib.checkedBigNumberify('./mint.rsh:85:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v678, {
        at: './mint.rsh:85:24:application',
        fs: ['at ./mint.rsh:84:25:application call to [unknown function] (defined at: ./mint.rsh:84:25:function exp)'],
        msg: null,
        who: 'UserAPI_burnToken'
        });
      const v679 = null;
      const v680 = await txn1.getOutput('UserAPI_burnToken', 'v679', ctc11, v679);
      if (v288) {
        stdlib.protect(ctc11, await interact.out(v609, v680), {
          at: './mint.rsh:78:14:application',
          fs: ['at ./mint.rsh:78:14:application call to [unknown function] (defined at: ./mint.rsh:78:14:function exp)', 'at ./mint.rsh:87:18:application call to "k" (defined at: ./mint.rsh:84:25:function exp)', 'at ./mint.rsh:84:25:application call to [unknown function] (defined at: ./mint.rsh:84:25:function exp)'],
          msg: 'out',
          who: 'UserAPI_burnToken'
          });
        }
      else {
        }
      
      const v687 = stdlib.safeSub(v523, v614);
      const v1185 = v522;
      const v1186 = v687;
      const v1188 = v674;
      const v1189 = v531;
      const v1190 = v674[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
      const v1191 = v1190[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
      const v1192 = v1191 ? false : true;
      const v1193 = v522 ? v1192 : true;
      if (v1193) {
        return;
        }
      else {
        const v1195 = v1190[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'UserAPI_mintToken0_93': {
      const v719 = v606[1];
      return;
      break;
      }
    }
  
  
  };
export async function _UserAPI_mintToken4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_mintToken4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_mintToken4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '52'));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc7, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc10 = stdlib.T_Data({
    UserAPI_burnToken0_93: ctc9,
    UserAPI_mintToken0_93: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc1, ctc1, ctc2, ctc3, ctc4, ctc1, ctc6, ctc1]);
  const v545 = stdlib.protect(ctc8, await interact.in(), {
    at: './mint.rsh:1:23:application',
    fs: ['at ./mint.rsh:62:28:application call to [unknown function] (defined at: ./mint.rsh:62:28:function exp)', 'at ./mint.rsh:53:47:application call to "runUserAPI_mintToken0_93" (defined at: ./mint.rsh:60:13:function exp)', 'at ./mint.rsh:53:47:application call to [unknown function] (defined at: ./mint.rsh:53:47:function exp)'],
    msg: 'in',
    who: 'UserAPI_mintToken'
    });
  const v546 = v545[stdlib.checkedBigNumberify('./mint.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v555 = stdlib.gt(v546, stdlib.checkedBigNumberify('./mint.rsh:63:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v555, {
    at: './mint.rsh:63:23:application',
    fs: ['at ./mint.rsh:62:28:application call to [unknown function] (defined at: ./mint.rsh:62:28:function exp)', 'at ./mint.rsh:62:28:application call to [unknown function] (defined at: ./mint.rsh:62:28:function exp)', 'at ./mint.rsh:53:47:application call to "runUserAPI_mintToken0_93" (defined at: ./mint.rsh:60:13:function exp)', 'at ./mint.rsh:53:47:application call to [unknown function] (defined at: ./mint.rsh:53:47:function exp)'],
    msg: 'Amount of token mint must be greater than zero',
    who: 'UserAPI_mintToken'
    });
  const v556 = v530[stdlib.checkedBigNumberify('./mint.rsh:64:31:application', stdlib.UInt_max, '0')];
  const v557 = v556[stdlib.checkedBigNumberify('./mint.rsh:64:31:application', stdlib.UInt_max, '0')];
  const v558 = stdlib.ge(v557, v546);
  stdlib.assert(v558, {
    at: './mint.rsh:64:23:application',
    fs: ['at ./mint.rsh:62:28:application call to [unknown function] (defined at: ./mint.rsh:62:28:function exp)', 'at ./mint.rsh:62:28:application call to [unknown function] (defined at: ./mint.rsh:62:28:function exp)', 'at ./mint.rsh:53:47:application call to "runUserAPI_mintToken0_93" (defined at: ./mint.rsh:60:13:function exp)', 'at ./mint.rsh:53:47:application call to [unknown function] (defined at: ./mint.rsh:53:47:function exp)'],
    msg: 'Not enough wrapped token balance to mint',
    who: 'UserAPI_mintToken'
    });
  const v565 = ['UserAPI_mintToken0_93', v545];
  
  const txn1 = await (ctc.sendrecv({
    args: [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531, v565],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./mint.rsh:68:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./mint.rsh:68:34:decimal', stdlib.UInt_max, '0'), v497]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v606], secs: v608, time: v607, didSend: v288, from: v605 } = txn1;
      
      switch (v606[0]) {
        case 'UserAPI_burnToken0_93': {
          const v609 = v606[1];
          
          break;
          }
        case 'UserAPI_mintToken0_93': {
          const v719 = v606[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserAPI_mintToken"
            });
          ;
          ;
          const v800 = v719[stdlib.checkedBigNumberify('./mint.rsh:60:13:spread', stdlib.UInt_max, '0')];
          const v805 = v530[stdlib.checkedBigNumberify('./mint.rsh:71:32:application', stdlib.UInt_max, '0')];
          const v806 = v805[stdlib.checkedBigNumberify('./mint.rsh:71:32:application', stdlib.UInt_max, '0')];
          const v813 = stdlib.sub(v806, v800);
          const v815 = stdlib.Array_set(v805, '0', v813);
          const v816 = stdlib.Array_set(v530, stdlib.checkedBigNumberify('./mint.rsh:72:54:application', stdlib.UInt_max, '0'), v815);
          sim_r.txns.push({
            kind: 'from',
            to: v605,
            tok: v497
            });
          const v817 = null;
          const v818 = await txn1.getOutput('UserAPI_mintToken', 'v817', ctc11, v817);
          
          const v827 = stdlib.safeAdd(v523, v800);
          const v1218 = v522;
          const v1219 = v827;
          const v1221 = v816;
          const v1222 = v531;
          const v1223 = v816[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
          const v1224 = v1223[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
          const v1225 = v1224 ? false : true;
          const v1226 = v522 ? v1225 : true;
          if (v1226) {
            sim_r.isHalt = false;
            }
          else {
            const v1228 = v1223[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v485,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v485,
              tok: v497
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc3, ctc4, ctc1, ctc6, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v606], secs: v608, time: v607, didSend: v288, from: v605 } = txn1;
  switch (v606[0]) {
    case 'UserAPI_burnToken0_93': {
      const v609 = v606[1];
      return;
      break;
      }
    case 'UserAPI_mintToken0_93': {
      const v719 = v606[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v800 = v719[stdlib.checkedBigNumberify('./mint.rsh:60:13:spread', stdlib.UInt_max, '0')];
      const v804 = stdlib.gt(v800, stdlib.checkedBigNumberify('./mint.rsh:70:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v804, {
        at: './mint.rsh:70:24:application',
        fs: ['at ./mint.rsh:69:31:application call to [unknown function] (defined at: ./mint.rsh:69:31:function exp)'],
        msg: null,
        who: 'UserAPI_mintToken'
        });
      const v805 = v530[stdlib.checkedBigNumberify('./mint.rsh:71:32:application', stdlib.UInt_max, '0')];
      const v806 = v805[stdlib.checkedBigNumberify('./mint.rsh:71:32:application', stdlib.UInt_max, '0')];
      const v807 = stdlib.ge(v806, v800);
      stdlib.assert(v807, {
        at: './mint.rsh:71:24:application',
        fs: ['at ./mint.rsh:69:31:application call to [unknown function] (defined at: ./mint.rsh:69:31:function exp)'],
        msg: null,
        who: 'UserAPI_mintToken'
        });
      const v813 = stdlib.sub(v806, v800);
      const v815 = stdlib.Array_set(v805, '0', v813);
      const v816 = stdlib.Array_set(v530, stdlib.checkedBigNumberify('./mint.rsh:72:54:application', stdlib.UInt_max, '0'), v815);
      ;
      const v817 = null;
      const v818 = await txn1.getOutput('UserAPI_mintToken', 'v817', ctc11, v817);
      if (v288) {
        stdlib.protect(ctc11, await interact.out(v719, v818), {
          at: './mint.rsh:61:13:application',
          fs: ['at ./mint.rsh:61:13:application call to [unknown function] (defined at: ./mint.rsh:61:13:function exp)', 'at ./mint.rsh:74:18:application call to "k" (defined at: ./mint.rsh:69:31:function exp)', 'at ./mint.rsh:69:31:application call to [unknown function] (defined at: ./mint.rsh:69:31:function exp)'],
          msg: 'out',
          who: 'UserAPI_mintToken'
          });
        }
      else {
        }
      
      const v827 = stdlib.safeAdd(v523, v800);
      const v1218 = v522;
      const v1219 = v827;
      const v1221 = v816;
      const v1222 = v531;
      const v1223 = v816[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
      const v1224 = v1223[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
      const v1225 = v1224 ? false : true;
      const v1226 = v522 ? v1225 : true;
      if (v1226) {
        return;
        }
      else {
        const v1228 = v1223[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function UserAPI_burnToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_burnToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_burnToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _UserAPI_burnToken4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function UserAPI_mintToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_mintToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_mintToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _UserAPI_mintToken4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`UserAPI_burnToken(uint64,address)void`, `UserAPI_mintToken(uint64,address,byte[52],uint64)void`, `_reachp_0((uint64,uint64,uint64,byte[32],byte[8],byte[96],byte[32],uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[100])))void`],
    pure: [`sourceChainId()uint64`, `sourceTokenId()uint64`, `wrappedToken()uint64`, `wrappedTokenMinted()uint64`, `wrappedTokenSupply()uint64`],
    sigs: [`UserAPI_burnToken(uint64,address)void`, `UserAPI_mintToken(uint64,address,byte[52],uint64)void`, `_reachp_0((uint64,uint64,uint64,byte[32],byte[8],byte[96],byte[32],uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[100])))void`, `sourceChainId()uint64`, `sourceTokenId()uint64`, `wrappedToken()uint64`, `wrappedTokenMinted()uint64`, `wrappedTokenSupply()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEECBGgjQYgKDA4JgIAAQAxGEED/ChkSSJbNQElWzUCKWSCCgQM2AYeBBYqP8YEK9PAvgRHCUvrBKOXyIEEx91LEQTZUC2gBN/ZIygE4K7wAQT97aO+NhoAjgoEbwABA3wDlwBSBHUEOwOMBDgEcgA2GgEXNhoCNQs1DCWvKTQMFjQLUFCBPK9QUDULJDQBEkSIBFM0CyJbNQw0C1cIZTUNgAS28Sq0NAwWUDQNULA0DIgEnjQNIlWNAgPmA3NC/642GgEXNhoCNhoDNhoEFzULNQw1DTUOJa+AAQE0DhY0DVA0DFA0CxZQUFA1C0L/nDQNVwEoIls1C4AJAAAAAAAAAAABgAkBAAAAAAAAAAA0EyJbNBQSTSNbNRk0DyEENBkLIQRYNQ00CzQUMRY0ACMISTUACUcDOBQyChJEOBAkEkQ4EU8CEkQ4EhJENAsiDUQoNQyACAAAAAAAAAKnNAxQsDQMNQQ0ETQLCTIGNA80GSEECzQNSSJbNAsIFlwAXTUPNRA1ETQPVwARNQs0EhQ0C1cQARcUEUECmTQYNBcWUDQWFlA0FRZQNBQWUDQTUDQSFlEHCFA0ERZQNA9QNA4WUCQyBjUCNQEpTFcAamcoNAEWNAIWUGcxGSISRIgDgjQDQAAKgAQVH3x1NARQsCNDNA1XAWQiW0k1CyINRDQPVwARSTUZIltJNQ00Cw9ENAs0FDEAiANaKDUMgAgAAAAAAAADMTQMULA0DDUENBE0CwgyBjQPNBk0DTQLCRZcAFwANQ81EDURQv87NAEkDEECIjQBIxJEiALKNBYWNQQxGSISREL/fjQBJAxBAhY0ASMSRIgCrjQXFjUEQv/hIkRC/9w0ASQSRIgCXDQRFjUEQv/MNAEkDEEB+jQBIxJEiAKCNBUWNQRC/7UxADUYNAsiWzUMNAslWzUXNAuBEFs1FjQLVxggNRE0C1c4CDUQNAtXQGA1DzQLV6AgNQ40C4HAAVs1FTQLgcgBWzUNgASOOefvNAwWUDQXFlA0FhZQNBFQNBBQNA9QNA5QNBUWUDQNFlCwNAyIAjkhBK81CyEFiAI5sSKyAYEDshA0FbIiNA2yIzQQsiU0EbImNA+yJzQOsigyCrIps7Q8NQyACAAAAAAAAAHwNAwWULA0DDUUNAtJVwARNBUWXABcADUMJa80FBZcADUTNAxJVwARNBUWXAhcAEk1C0lXABEpXBBcADUNNBg0FxZQNBYWUDQVFlA0FBZQNBNQNA1QIQSvUCMyBkL+ESM0ARJEiAFoNAsXNQyABNUVGRQ0DBZQsDQMiAGBNBgxABJEIiIyBjQNIjUONQ81EDURNRJC/ZuIAWAhBYgBaTYaATULQv6viAFQNhoBNQtC/66IAUU2GgE1C0L8eyIxNBJEgQIxNRJEIjE2EkQiMTcSRIgBJYFqryIiQv2UQv29NA40GIgBMzQLIls0FDQYiAEsMRmBBRJEiAETIjIKMgmIAR9C/YYisgEjshCyB7IIs4kisgEkshCyFLIRshKziTQBJBJEiABrNBYWNQRC/ds0ASQSRIgAWzQXFjUEQv3LNAEkEkSIAEs0FRY1BEL9u0L8SUL9oUL9ukiJTAlJNQYyCYgAtYkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlC/aJC/a9C/ZdJVwAgNRhJIQZbNRdJIQdbNRZJIQhbNRVJIQlbNRRJV0AINRNJV0gBFzUSSYFJWzURSVdRETUPgWJbNQ6JSVcAIDUYSSEGWzUXSSEHWzUWSSEIWzUVSSEJWzUUSVdACDUTV0gRNQ2JIzUDiUkiEkw0AhIRRIk0Bgg1Bok0BjQHSg9B/0RC/0yxQv7osUL+8LGyCUL+3g==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `20`,
    1000: `570`,
    1001: `570`,
    1002: `571`,
    1003: `571`,
    1004: `572`,
    1005: `572`,
    1006: `572`,
    1007: `574`,
    1008: `574`,
    1009: `574`,
    101: `20`,
    1010: `575`,
    1011: `575`,
    1012: `576`,
    1013: `576`,
    1014: `576`,
    1015: `577`,
    1016: `577`,
    1017: `577`,
    1018: `578`,
    1019: `578`,
    102: `20`,
    1020: `579`,
    1021: `579`,
    1022: `579`,
    1023: `581`,
    1024: `581`,
    1025: `581`,
    1026: `582`,
    1027: `582`,
    1028: `582`,
    1029: `583`,
    103: `20`,
    1030: `583`,
    1031: `584`,
    1032: `584`,
    1033: `584`,
    1034: `586`,
    1035: `586`,
    1036: `586`,
    1037: `587`,
    1038: `587`,
    1039: `587`,
    104: `20`,
    1040: `588`,
    1041: `588`,
    1042: `589`,
    1043: `589`,
    1044: `589`,
    1045: `591`,
    1046: `592`,
    1047: `592`,
    1048: `593`,
    1049: `594`,
    105: `20`,
    1050: `595`,
    1051: `595`,
    1052: `596`,
    1053: `596`,
    1054: `597`,
    1055: `598`,
    1056: `599`,
    1057: `600`,
    1058: `600`,
    1059: `601`,
    106: `20`,
    1060: `602`,
    1061: `603`,
    1062: `604`,
    1063: `604`,
    1064: `605`,
    1065: `606`,
    1066: `607`,
    1067: `607`,
    1068: `607`,
    1069: `608`,
    107: `20`,
    1070: `608`,
    1071: `609`,
    1072: `610`,
    1073: `611`,
    1074: `612`,
    1075: `612`,
    1076: `612`,
    1077: `614`,
    1078: `614`,
    1079: `614`,
    108: `20`,
    1080: `616`,
    1081: `616`,
    1082: `618`,
    1083: `618`,
    1084: `619`,
    1085: `619`,
    1086: `619`,
    1087: `620`,
    1088: `620`,
    1089: `621`,
    109: `20`,
    1090: `622`,
    1091: `624`,
    1092: `624`,
    1093: `625`,
    1094: `625`,
    1095: `626`,
    1096: `626`,
    1097: `626`,
    1098: `628`,
    1099: `628`,
    11: `2`,
    110: `20`,
    1100: `629`,
    1101: `629`,
    1102: `630`,
    1103: `631`,
    1104: `633`,
    1105: `633`,
    1106: `633`,
    1107: `635`,
    1108: `636`,
    1109: `636`,
    111: `20`,
    1110: `637`,
    1111: `637`,
    1112: `638`,
    1113: `638`,
    1114: `638`,
    1115: `639`,
    1116: `639`,
    1117: `639`,
    1118: `641`,
    1119: `642`,
    112: `20`,
    1120: `642`,
    1121: `643`,
    1122: `644`,
    1123: `644`,
    1124: `645`,
    1125: `645`,
    1126: `646`,
    1127: `646`,
    1128: `647`,
    1129: `648`,
    113: `20`,
    1130: `650`,
    1131: `651`,
    1132: `651`,
    1133: `652`,
    1134: `653`,
    1135: `653`,
    1136: `654`,
    1137: `654`,
    1138: `655`,
    1139: `655`,
    114: `20`,
    1140: `656`,
    1141: `656`,
    1142: `657`,
    1143: `658`,
    1144: `660`,
    1145: `660`,
    1146: `661`,
    1147: `662`,
    1148: `663`,
    1149: `666`,
    115: `22`,
    1150: `666`,
    1151: `666`,
    1152: `667`,
    1153: `667`,
    1154: `668`,
    1155: `669`,
    1156: `669`,
    1157: `670`,
    1158: `670`,
    1159: `670`,
    116: `24`,
    1160: `672`,
    1161: `672`,
    1162: `673`,
    1163: `674`,
    1164: `675`,
    1165: `678`,
    1166: `678`,
    1167: `678`,
    1168: `679`,
    1169: `679`,
    117: `24`,
    1170: `680`,
    1171: `681`,
    1172: `681`,
    1173: `682`,
    1174: `682`,
    1175: `682`,
    1176: `684`,
    1177: `684`,
    1178: `685`,
    1179: `686`,
    118: `24`,
    1180: `687`,
    1181: `690`,
    1182: `690`,
    1183: `690`,
    1184: `691`,
    1185: `691`,
    1186: `692`,
    1187: `693`,
    1188: `693`,
    1189: `694`,
    119: `25`,
    1190: `694`,
    1191: `694`,
    1192: `696`,
    1193: `696`,
    1194: `696`,
    1195: `698`,
    1196: `698`,
    1197: `698`,
    1198: `700`,
    1199: `700`,
    12: `2`,
    120: `26`,
    1200: `700`,
    1201: `702`,
    1202: `703`,
    1203: `705`,
    1204: `706`,
    1205: `707`,
    1206: `708`,
    1207: `708`,
    1208: `709`,
    1209: `709`,
    121: `26`,
    1210: `710`,
    1211: `710`,
    1212: `710`,
    1213: `711`,
    1214: `713`,
    1215: `714`,
    1216: `715`,
    1217: `715`,
    1218: `715`,
    1219: `716`,
    122: `26`,
    1220: `717`,
    1221: `717`,
    1222: `720`,
    1223: `720`,
    1224: `721`,
    1225: `721`,
    1226: `722`,
    1227: `723`,
    1228: `724`,
    1229: `725`,
    123: `27`,
    1230: `725`,
    1231: `726`,
    1232: `727`,
    1233: `727`,
    1234: `728`,
    1235: `728`,
    1236: `729`,
    1237: `729`,
    1238: `730`,
    1239: `731`,
    124: `27`,
    1240: `732`,
    1241: `732`,
    1242: `733`,
    1243: `734`,
    1244: `735`,
    1245: `736`,
    1246: `736`,
    1247: `737`,
    1248: `738`,
    1249: `739`,
    125: `28`,
    1250: `741`,
    1251: `741`,
    1252: `741`,
    1253: `743`,
    1254: `743`,
    1255: `743`,
    1256: `745`,
    1257: `745`,
    1258: `745`,
    1259: `747`,
    126: `28`,
    1260: `748`,
    1261: `748`,
    1262: `748`,
    1263: `749`,
    1264: `749`,
    1265: `750`,
    1266: `751`,
    1267: `751`,
    1268: `752`,
    1269: `753`,
    127: `30`,
    1270: `753`,
    1271: `754`,
    1272: `755`,
    1273: `755`,
    1274: `756`,
    1275: `757`,
    1276: `757`,
    1277: `758`,
    1278: `759`,
    1279: `759`,
    128: `31`,
    1280: `760`,
    1281: `761`,
    1282: `761`,
    1283: `762`,
    1284: `763`,
    1285: `763`,
    1286: `764`,
    1287: `765`,
    1288: `765`,
    1289: `766`,
    129: `32`,
    1290: `767`,
    1291: `767`,
    1292: `767`,
    1293: `768`,
    1294: `768`,
    1295: `769`,
    1296: `770`,
    1297: `770`,
    1298: `770`,
    1299: `771`,
    13: `2`,
    130: `33`,
    1300: `772`,
    1301: `772`,
    1302: `773`,
    1303: `774`,
    1304: `774`,
    1305: `775`,
    1306: `776`,
    1307: `776`,
    1308: `777`,
    1309: `778`,
    131: `33`,
    1310: `778`,
    1311: `778`,
    1312: `779`,
    1313: `779`,
    1314: `780`,
    1315: `780`,
    1316: `781`,
    1317: `782`,
    1318: `782`,
    1319: `783`,
    132: `34`,
    1320: `785`,
    1321: `786`,
    1322: `786`,
    1323: `786`,
    1324: `787`,
    1325: `787`,
    1326: `788`,
    1327: `789`,
    1328: `789`,
    1329: `790`,
    133: `35`,
    1330: `791`,
    1331: `791`,
    1332: `792`,
    1333: `793`,
    1334: `793`,
    1335: `794`,
    1336: `795`,
    1337: `795`,
    1338: `796`,
    1339: `797`,
    134: `35`,
    1340: `797`,
    1341: `798`,
    1342: `799`,
    1343: `799`,
    1344: `800`,
    1345: `801`,
    1346: `801`,
    1347: `802`,
    1348: `803`,
    1349: `803`,
    135: `36`,
    1350: `804`,
    1351: `805`,
    1352: `805`,
    1353: `805`,
    1354: `806`,
    1355: `806`,
    1356: `807`,
    1357: `807`,
    1358: `807`,
    1359: `808`,
    136: `37`,
    1360: `808`,
    1361: `809`,
    1362: `811`,
    1363: `812`,
    1364: `812`,
    1365: `813`,
    1366: `815`,
    1367: `816`,
    1368: `817`,
    1369: `818`,
    137: `38`,
    1370: `819`,
    1371: `819`,
    1372: `820`,
    1373: `821`,
    1374: `822`,
    1375: `823`,
    1376: `825`,
    1377: `825`,
    1378: `826`,
    1379: `827`,
    138: `38`,
    1380: `827`,
    1381: `828`,
    1382: `830`,
    1383: `830`,
    1384: `831`,
    1385: `831`,
    1386: `832`,
    1387: `833`,
    1388: `834`,
    1389: `834`,
    139: `39`,
    1390: `834`,
    1391: `835`,
    1392: `835`,
    1393: `835`,
    1394: `837`,
    1395: `838`,
    1396: `838`,
    1397: `838`,
    1398: `840`,
    1399: `841`,
    14: `2`,
    140: `40`,
    1400: `841`,
    1401: `841`,
    1402: `843`,
    1403: `844`,
    1404: `844`,
    1405: `845`,
    141: `41`,
    142: `42`,
    143: `42`,
    144: `44`,
    145: `45`,
    146: `45`,
    147: `46`,
    148: `47`,
    149: `48`,
    15: `2`,
    150: `48`,
    151: `48`,
    152: `49`,
    153: `49`,
    154: `50`,
    155: `51`,
    156: `52`,
    157: `52`,
    158: `53`,
    159: `53`,
    16: `2`,
    160: `54`,
    161: `54`,
    162: `54`,
    163: `55`,
    164: `55`,
    165: `56`,
    166: `56`,
    167: `56`,
    168: `56`,
    169: `56`,
    17: `2`,
    170: `56`,
    171: `57`,
    172: `57`,
    173: `58`,
    174: `59`,
    175: `60`,
    176: `60`,
    177: `61`,
    178: `62`,
    179: `64`,
    18: `2`,
    180: `64`,
    181: `65`,
    182: `65`,
    183: `65`,
    184: `66`,
    185: `66`,
    186: `67`,
    187: `68`,
    188: `69`,
    189: `69`,
    19: `2`,
    190: `69`,
    191: `69`,
    192: `69`,
    193: `69`,
    194: `70`,
    195: `70`,
    196: `70`,
    197: `72`,
    198: `72`,
    199: `72`,
    2: `2`,
    20: `4`,
    200: `73`,
    201: `74`,
    202: `74`,
    203: `74`,
    204: `75`,
    205: `75`,
    206: `75`,
    207: `76`,
    208: `76`,
    209: `76`,
    21: `4`,
    210: `77`,
    211: `78`,
    212: `78`,
    213: `79`,
    214: `79`,
    215: `80`,
    216: `80`,
    217: `81`,
    218: `81`,
    219: `83`,
    22: `5`,
    220: `84`,
    221: `85`,
    222: `85`,
    223: `85`,
    224: `86`,
    225: `86`,
    226: `87`,
    227: `88`,
    228: `88`,
    229: `89`,
    23: `5`,
    230: `90`,
    231: `90`,
    232: `91`,
    233: `92`,
    234: `92`,
    235: `93`,
    236: `94`,
    237: `95`,
    238: `96`,
    239: `97`,
    24: `5`,
    240: `97`,
    241: `98`,
    242: `98`,
    243: `98`,
    244: `100`,
    245: `100`,
    246: `101`,
    247: `101`,
    248: `101`,
    249: `102`,
    25: `6`,
    250: `103`,
    251: `104`,
    252: `104`,
    253: `105`,
    254: `105`,
    255: `105`,
    256: `105`,
    257: `105`,
    258: `105`,
    259: `105`,
    26: `7`,
    260: `105`,
    261: `105`,
    262: `105`,
    263: `105`,
    264: `106`,
    265: `106`,
    266: `106`,
    267: `106`,
    268: `106`,
    269: `106`,
    27: `8`,
    270: `106`,
    271: `106`,
    272: `106`,
    273: `106`,
    274: `106`,
    275: `107`,
    276: `107`,
    277: `108`,
    278: `109`,
    279: `110`,
    28: `9`,
    280: `110`,
    281: `111`,
    282: `112`,
    283: `113`,
    284: `114`,
    285: `115`,
    286: `115`,
    287: `116`,
    288: `116`,
    289: `117`,
    29: `10`,
    290: `117`,
    291: `118`,
    292: `118`,
    293: `119`,
    294: `120`,
    295: `120`,
    296: `121`,
    297: `122`,
    298: `122`,
    299: `123`,
    3: `2`,
    30: `11`,
    300: `123`,
    301: `124`,
    302: `124`,
    303: `127`,
    304: `127`,
    305: `128`,
    306: `128`,
    307: `129`,
    308: `130`,
    309: `131`,
    31: `11`,
    310: `132`,
    311: `132`,
    312: `133`,
    313: `134`,
    314: `134`,
    315: `135`,
    316: `135`,
    317: `136`,
    318: `136`,
    319: `137`,
    32: `12`,
    320: `138`,
    321: `139`,
    322: `139`,
    323: `140`,
    324: `141`,
    325: `142`,
    326: `143`,
    327: `143`,
    328: `144`,
    329: `144`,
    33: `13`,
    330: `145`,
    331: `146`,
    332: `147`,
    333: `147`,
    334: `148`,
    335: `149`,
    336: `152`,
    337: `152`,
    338: `153`,
    339: `154`,
    34: `14`,
    340: `155`,
    341: `159`,
    342: `160`,
    343: `160`,
    344: `161`,
    345: `161`,
    346: `161`,
    347: `161`,
    348: `161`,
    349: `161`,
    35: `14`,
    350: `161`,
    351: `161`,
    352: `161`,
    353: `161`,
    354: `162`,
    355: `162`,
    356: `163`,
    357: `164`,
    358: `165`,
    359: `165`,
    36: `15`,
    360: `166`,
    361: `166`,
    362: `167`,
    363: `167`,
    364: `168`,
    365: `168`,
    366: `169`,
    367: `170`,
    368: `170`,
    369: `171`,
    37: `16`,
    370: `171`,
    371: `172`,
    372: `172`,
    373: `173`,
    374: `173`,
    375: `174`,
    376: `175`,
    377: `175`,
    378: `176`,
    379: `177`,
    38: `18`,
    380: `178`,
    381: `179`,
    382: `179`,
    383: `180`,
    384: `181`,
    385: `182`,
    386: `182`,
    387: `183`,
    388: `184`,
    389: `184`,
    39: `18`,
    390: `185`,
    391: `185`,
    392: `186`,
    393: `186`,
    394: `188`,
    395: `188`,
    396: `189`,
    397: `189`,
    398: `189`,
    399: `190`,
    4: `2`,
    40: `18`,
    400: `190`,
    401: `191`,
    402: `191`,
    403: `192`,
    404: `193`,
    405: `193`,
    406: `194`,
    407: `194`,
    408: `194`,
    409: `195`,
    41: `18`,
    410: `196`,
    411: `197`,
    412: `198`,
    413: `198`,
    414: `198`,
    415: `200`,
    416: `200`,
    417: `201`,
    418: `201`,
    419: `202`,
    42: `18`,
    420: `203`,
    421: `204`,
    422: `204`,
    423: `205`,
    424: `206`,
    425: `207`,
    426: `207`,
    427: `208`,
    428: `209`,
    429: `210`,
    43: `18`,
    430: `210`,
    431: `211`,
    432: `212`,
    433: `213`,
    434: `213`,
    435: `214`,
    436: `215`,
    437: `215`,
    438: `216`,
    439: `217`,
    44: `18`,
    440: `217`,
    441: `217`,
    442: `218`,
    443: `219`,
    444: `219`,
    445: `220`,
    446: `221`,
    447: `222`,
    448: `222`,
    449: `223`,
    45: `18`,
    450: `224`,
    451: `224`,
    452: `225`,
    453: `226`,
    454: `227`,
    455: `228`,
    456: `228`,
    457: `230`,
    458: `230`,
    459: `231`,
    46: `18`,
    460: `231`,
    461: `232`,
    462: `233`,
    463: `234`,
    464: `234`,
    465: `234`,
    466: `235`,
    467: `236`,
    468: `237`,
    469: `237`,
    47: `18`,
    470: `238`,
    471: `239`,
    472: `239`,
    473: `240`,
    474: `241`,
    475: `242`,
    476: `243`,
    477: `243`,
    478: `244`,
    479: `245`,
    48: `18`,
    480: `246`,
    481: `248`,
    482: `248`,
    483: `248`,
    484: `250`,
    485: `250`,
    486: `251`,
    487: `251`,
    488: `251`,
    489: `253`,
    49: `18`,
    490: `253`,
    491: `253`,
    492: `253`,
    493: `253`,
    494: `253`,
    495: `254`,
    496: `254`,
    497: `255`,
    498: `256`,
    499: `258`,
    5: `2`,
    50: `18`,
    500: `259`,
    501: `261`,
    502: `261`,
    503: `262`,
    504: `262`,
    505: `262`,
    506: `263`,
    507: `264`,
    508: `265`,
    509: `266`,
    51: `18`,
    510: `266`,
    511: `267`,
    512: `268`,
    513: `269`,
    514: `273`,
    515: `273`,
    516: `274`,
    517: `274`,
    518: `274`,
    519: `275`,
    52: `18`,
    520: `276`,
    521: `276`,
    522: `277`,
    523: `278`,
    524: `279`,
    525: `280`,
    526: `280`,
    527: `281`,
    528: `281`,
    529: `282`,
    53: `18`,
    530: `283`,
    531: `287`,
    532: `287`,
    533: `289`,
    534: `289`,
    535: `291`,
    536: `291`,
    537: `292`,
    538: `292`,
    539: `292`,
    54: `18`,
    540: `293`,
    541: `294`,
    542: `294`,
    543: `295`,
    544: `295`,
    545: `295`,
    546: `295`,
    547: `295`,
    548: `295`,
    549: `295`,
    55: `18`,
    550: `295`,
    551: `295`,
    552: `295`,
    553: `296`,
    554: `296`,
    555: `297`,
    556: `298`,
    557: `299`,
    558: `299`,
    559: `300`,
    56: `18`,
    560: `300`,
    561: `301`,
    562: `301`,
    563: `302`,
    564: `302`,
    565: `303`,
    566: `304`,
    567: `304`,
    568: `305`,
    569: `305`,
    57: `18`,
    570: `306`,
    571: `306`,
    572: `307`,
    573: `307`,
    574: `308`,
    575: `308`,
    576: `309`,
    577: `310`,
    578: `311`,
    579: `311`,
    58: `18`,
    580: `312`,
    581: `312`,
    582: `313`,
    583: `313`,
    584: `314`,
    585: `314`,
    586: `315`,
    587: `315`,
    588: `316`,
    589: `316`,
    59: `18`,
    590: `316`,
    591: `318`,
    592: `318`,
    593: `319`,
    594: `320`,
    595: `321`,
    596: `321`,
    597: `321`,
    598: `322`,
    599: `322`,
    6: `2`,
    60: `18`,
    600: `323`,
    601: `324`,
    602: `325`,
    603: `328`,
    604: `328`,
    605: `328`,
    606: `329`,
    607: `329`,
    608: `330`,
    609: `331`,
    61: `18`,
    610: `331`,
    611: `333`,
    612: `333`,
    613: `334`,
    614: `335`,
    615: `336`,
    616: `338`,
    617: `338`,
    618: `338`,
    619: `340`,
    62: `18`,
    620: `340`,
    621: `341`,
    622: `342`,
    623: `343`,
    624: `343`,
    625: `343`,
    626: `344`,
    627: `344`,
    628: `345`,
    629: `346`,
    63: `18`,
    630: `347`,
    631: `350`,
    632: `350`,
    633: `350`,
    634: `351`,
    635: `351`,
    636: `352`,
    637: `353`,
    638: `353`,
    639: `354`,
    64: `18`,
    640: `354`,
    641: `354`,
    642: `356`,
    643: `357`,
    644: `360`,
    645: `360`,
    646: `360`,
    647: `362`,
    648: `362`,
    649: `363`,
    65: `18`,
    650: `364`,
    651: `365`,
    652: `368`,
    653: `368`,
    654: `368`,
    655: `369`,
    656: `369`,
    657: `370`,
    658: `371`,
    659: `371`,
    66: `18`,
    660: `372`,
    661: `372`,
    662: `372`,
    663: `374`,
    664: `374`,
    665: `375`,
    666: `376`,
    667: `377`,
    668: `377`,
    669: `377`,
    67: `18`,
    670: `378`,
    671: `378`,
    672: `379`,
    673: `380`,
    674: `381`,
    675: `384`,
    676: `384`,
    677: `384`,
    678: `385`,
    679: `385`,
    68: `18`,
    680: `386`,
    681: `387`,
    682: `387`,
    683: `388`,
    684: `388`,
    685: `388`,
    686: `390`,
    687: `390`,
    688: `391`,
    689: `391`,
    69: `18`,
    690: `392`,
    691: `392`,
    692: `393`,
    693: `394`,
    694: `395`,
    695: `395`,
    696: `396`,
    697: `396`,
    698: `397`,
    699: `398`,
    7: `2`,
    70: `18`,
    700: `399`,
    701: `399`,
    702: `400`,
    703: `400`,
    704: `401`,
    705: `401`,
    706: `402`,
    707: `403`,
    708: `403`,
    709: `404`,
    71: `18`,
    710: `404`,
    711: `405`,
    712: `405`,
    713: `405`,
    714: `406`,
    715: `406`,
    716: `407`,
    717: `407`,
    718: `408`,
    719: `408`,
    72: `18`,
    720: `408`,
    721: `409`,
    722: `409`,
    723: `410`,
    724: `410`,
    725: `411`,
    726: `411`,
    727: `411`,
    728: `412`,
    729: `412`,
    73: `18`,
    730: `413`,
    731: `413`,
    732: `414`,
    733: `414`,
    734: `414`,
    735: `415`,
    736: `415`,
    737: `416`,
    738: `416`,
    739: `417`,
    74: `18`,
    740: `417`,
    741: `417`,
    742: `418`,
    743: `419`,
    744: `419`,
    745: `420`,
    746: `420`,
    747: `421`,
    748: `421`,
    749: `421`,
    75: `18`,
    750: `422`,
    751: `423`,
    752: `423`,
    753: `424`,
    754: `424`,
    755: `424`,
    756: `424`,
    757: `424`,
    758: `424`,
    759: `425`,
    76: `18`,
    760: `425`,
    761: `426`,
    762: `427`,
    763: `428`,
    764: `428`,
    765: `429`,
    766: `430`,
    767: `431`,
    768: `431`,
    769: `432`,
    77: `18`,
    770: `433`,
    771: `434`,
    772: `434`,
    773: `435`,
    774: `436`,
    775: `436`,
    776: `437`,
    777: `438`,
    778: `438`,
    779: `439`,
    78: `18`,
    780: `440`,
    781: `440`,
    782: `441`,
    783: `442`,
    784: `442`,
    785: `443`,
    786: `444`,
    787: `445`,
    788: `445`,
    789: `446`,
    79: `18`,
    790: `447`,
    791: `448`,
    792: `450`,
    793: `450`,
    794: `451`,
    795: `451`,
    796: `451`,
    797: `452`,
    798: `452`,
    799: `453`,
    8: `2`,
    80: `18`,
    800: `454`,
    801: `454`,
    802: `455`,
    803: `455`,
    804: `456`,
    805: `456`,
    806: `456`,
    807: `457`,
    808: `458`,
    809: `459`,
    81: `18`,
    810: `459`,
    811: `460`,
    812: `460`,
    813: `461`,
    814: `461`,
    815: `462`,
    816: `462`,
    817: `463`,
    818: `463`,
    819: `464`,
    82: `18`,
    820: `464`,
    821: `465`,
    822: `465`,
    823: `466`,
    824: `466`,
    825: `467`,
    826: `467`,
    827: `468`,
    828: `468`,
    829: `469`,
    83: `18`,
    830: `469`,
    831: `470`,
    832: `470`,
    833: `471`,
    834: `471`,
    835: `472`,
    836: `472`,
    837: `473`,
    838: `473`,
    839: `474`,
    84: `18`,
    840: `474`,
    841: `475`,
    842: `475`,
    843: `476`,
    844: `477`,
    845: `477`,
    846: `478`,
    847: `478`,
    848: `479`,
    849: `479`,
    85: `18`,
    850: `479`,
    851: `479`,
    852: `479`,
    853: `479`,
    854: `479`,
    855: `479`,
    856: `479`,
    857: `479`,
    858: `480`,
    859: `480`,
    86: `18`,
    860: `481`,
    861: `482`,
    862: `483`,
    863: `484`,
    864: `484`,
    865: `485`,
    866: `485`,
    867: `486`,
    868: `486`,
    869: `487`,
    87: `18`,
    870: `488`,
    871: `488`,
    872: `488`,
    873: `489`,
    874: `489`,
    875: `490`,
    876: `491`,
    877: `491`,
    878: `492`,
    879: `492`,
    88: `18`,
    880: `493`,
    881: `493`,
    882: `494`,
    883: `495`,
    884: `496`,
    885: `496`,
    886: `497`,
    887: `498`,
    888: `498`,
    889: `499`,
    89: `18`,
    890: `499`,
    891: `500`,
    892: `500`,
    893: `501`,
    894: `502`,
    895: `502`,
    896: `502`,
    897: `503`,
    898: `503`,
    899: `504`,
    9: `2`,
    90: `19`,
    900: `505`,
    901: `505`,
    902: `506`,
    903: `506`,
    904: `507`,
    905: `508`,
    906: `508`,
    907: `509`,
    908: `510`,
    909: `510`,
    91: `19`,
    910: `510`,
    911: `511`,
    912: `512`,
    913: `512`,
    914: `513`,
    915: `513`,
    916: `514`,
    917: `514`,
    918: `516`,
    919: `516`,
    92: `19`,
    920: `517`,
    921: `517`,
    922: `518`,
    923: `519`,
    924: `520`,
    925: `520`,
    926: `521`,
    927: `522`,
    928: `523`,
    929: `523`,
    93: `20`,
    930: `524`,
    931: `525`,
    932: `526`,
    933: `526`,
    934: `527`,
    935: `528`,
    936: `529`,
    937: `529`,
    938: `530`,
    939: `531`,
    94: `20`,
    940: `531`,
    941: `532`,
    942: `533`,
    943: `533`,
    944: `534`,
    945: `535`,
    946: `536`,
    947: `537`,
    948: `537`,
    949: `538`,
    95: `20`,
    950: `538`,
    951: `538`,
    952: `540`,
    953: `541`,
    954: `541`,
    955: `542`,
    956: `543`,
    957: `544`,
    958: `544`,
    959: `544`,
    96: `20`,
    960: `545`,
    961: `545`,
    962: `546`,
    963: `547`,
    964: `547`,
    965: `548`,
    966: `548`,
    967: `548`,
    968: `548`,
    969: `548`,
    97: `20`,
    970: `548`,
    971: `549`,
    972: `549`,
    973: `550`,
    974: `551`,
    975: `552`,
    976: `554`,
    977: `554`,
    978: `555`,
    979: `555`,
    98: `20`,
    980: `555`,
    981: `556`,
    982: `556`,
    983: `557`,
    984: `557`,
    985: `558`,
    986: `559`,
    987: `562`,
    988: `563`,
    989: `564`,
    99: `20`,
    990: `564`,
    991: `565`,
    992: `565`,
    993: `566`,
    994: `567`,
    995: `567`,
    996: `568`,
    997: `568`,
    998: `569`,
    999: `569`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 106,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T11","name":"elem5","type":"tuple"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"}],"internalType":"struct T12","name":"v1266","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T11","name":"elem5","type":"tuple"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_UserAPI_burnToken0_93","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_UserAPI_mintToken0_93","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v496","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v679","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v817","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1250","type":"uint256"},{"internalType":"address payable","name":"v1251","type":"address"}],"name":"UserAPI_burnToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1260","type":"uint256"},{"internalType":"address payable","name":"v1261","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"v1262","type":"tuple"},{"internalType":"uint256","name":"v1263","type":"uint256"}],"name":"UserAPI_mintToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T13","name":"v1269","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_UserAPI_burnToken0_93","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_UserAPI_mintToken0_93","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v1272","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sourceChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sourceTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wrappedToken","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wrappedTokenMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wrappedTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200396038819003906080601f8301601f1916810191906001600160401b03831190831017620007d85782916040526080396101608112620008d4576040519061012082016001600160401b03811183821017620007d8576040908152608051835260a051602084015260c0519083015260e051606083015261010051906001600160c01b031982168203620008d4576060916080840152609f190112620008d457604051620000af81620008d9565b6101205181526101405160208201526101605160408083019190915260a08301919091526101805160c08301526101a05160e08301526101c05161010080840191909152600080554360035590519081018082116001600160401b0390911117620007d85760e081610100600093016040528281528260208201528260408201528260608201528260808201528260a08201528260c082015201526040516200015881620008f5565b6200016262000949565b81526200016e6200096a565b6020820152604051620001818162000911565b602036823760408201526000606082015260006080820152620001a36200096a565b60a0820152620001b26200096a565b60c082015260ff60045416620008bb577f2c3082780f545d3a7ffc2b59f6aca1fc581ee8cc60225304805523773999bd166101806040513381528451602082015260208501516040820152604085015160608201526060850151608082015260018060c01b031960808601511660a0820152604060a0860151805160c0840152602081015160e0840152015161010082015260c085015161012082015260e0850151610140820152610100850151610160820152a181518015908115620008ae575b5015620008955760008151526000602082510152600060408251015280516020820151526000604082015152346200087c57606082015160405190602082015260208152620002c3816200092d565b60808301516040516001600160c01b031990911660208201526008815290620002ec826200092d565b60a0840151918251926040602082015191015190604051946020860152604085015260608401526060835282608081011060018060401b03608085011117620007d85760808301604081905260c086015160a08501526020815262000351906200092d565b60e085015161010086015160405194919290916001600160401b03611002870190811190871117620007d8576080620003db620003c4620003f394620003ad8a996110026200295e8c3960c06110028c018181520190620009ca565b906110028a01820360206110028c010152620009ca565b6110028801810360406110028a01015283620009ca565b916110028701830360606110028901015201620009ca565b9160806110028501015260a06110028401015203906000f0801562000870576001600160a01b031660608201819052608082018190526040519081527f3da5f871c66b2ccbaf51be75477a3fefb87843585db914738b65716e1e15578a90602090a1620004c062000498602083015160e085015190805160406020820151910151151590604051936200048685620008d9565b84526020840152604083015262000a32565b8060a084015260e08401519080519160408351930151151590604051936200048685620008d9565b60c082015260e060405192620004d684620008f5565b6000845260006020850152600060408501526000606085015260006080850152604051620005048162000911565b602036823760a0850152620005186200096a565b60c085015233845260208101516020850152604081015160408501520151606083015260018060a01b036080820151166080830152604081015160018060a01b03608083015116604051916200056e8362000911565b602036843760005b600181106200083c5785620005bf60c0878787815260a085015201518051906020825192015160405192620005ab84620008d9565b835260208301526000604083015262000a32565b60c08201526001600055436001556040519060018060a01b03815116602083015260208101516040830152604081015160608301526060810151608083015260018060a01b0360808201511660a083015260a081015160c083016000905b600182106200081b578460c085015160e082016000905b60018210620007ee5761012084528361014081016001600160401b03811182821017620007d85760405280516001600160401b038111620007d857600254600181811c91168015620007cd575b6020821014620007b757601f81116200074d575b50602091601f8211600114620006e357918192600092620006d7575b50508160011b916000199060031b1c1916176002555b604051611ed4908162000a8a8239f35b015190508280620006b1565b601f19821692600260005260206000209160005b85811062000734575083600195106200071a575b505050811b01600255620006c7565b015160001960f88460031b161c191690558280806200070b565b91926020600181928685015181550194019201620006f7565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620007ac575b601f0160051c01905b8181106200079f575062000695565b6000815560010162000790565b909150819062000787565b634e487b7160e01b600052602260045260246000fd5b90607f169062000681565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000634565b82516001600160a01b0316815260209283019260019290920191016200061d565b6200086a906001600160a01b03620008558285620009a2565b5116620008638287620009a2565b5262000a0c565b62000576565b6040513d6000823e3d90fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b9050600154143862000274565b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b606081019081106001600160401b03821117620007d857604052565b60e081019081106001600160401b03821117620007d857604052565b602081019081106001600160401b03821117620007d857604052565b604081019081106001600160401b03821117620007d857604052565b604051906200095882620008d9565b60006040838281528260208201520152565b60405190620009798262000911565b8160005b602081106200098a575050565b6020906200099762000949565b81840152016200097d565b906001811015620009b45760051b0190565b634e487b7160e01b600052603260045260246000fd5b919082519283825260005b848110620009f7575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201620009d5565b600019811462000a1c5760010190565b634e487b7160e01b600052601160045260246000fd5b919062000a3e6200096a565b9260005b6001811062000a515750508252565b8062000a6262000a839284620009a2565b5162000a6f8288620009a2565b5262000a7c8187620009a2565b5062000a0c565b62000a4256fe60806040526004361015610018575b361561001657005b005b60003560e01c806309eb5248146101085780631544298e146100ff5780631e93b0f1146100f6578063573b8510146100ed57806363512a02146100e457806383230757146100db57806396954dd9146100d2578063996c6cc3146100c9578063ab53f2c6146100c0578063b4cad37e146100b7578063dfcf4def146100ae5763ed25d1380361000e576100a961074d565b61000e565b506100a9610655565b506100a96105f8565b506100a9610583565b506100a961054f565b506100a96104d6565b506100a96104b7565b506100a96103fe565b506100a9610276565b506100a9610257565b506100a96101b8565b506101203660031901126101b35761011e610999565b60409081519061012d8261080a565b60043582526101003660231901126101b35782519161014b83610832565b60243560028110156101b3578352836043193601126101b3576101a59284516101738161080a565b6044358152606435610184816103ed565b6020820152602082015261019736611e13565b858201526020820152610e06565b5160008152602090f35b0390f35b600080fd5b50346101b35760003660031901126101b3576101af60606101d7610999565b60005460048110156102245760016101ef911461134f565b604061020b6101fc6108c1565b60208082518301019101611d76565b0151828201525b01516040519081529081906020820190565b6004610230911461132f565b604061024c61023d6108c1565b60208082518301019101610bd2565b015182820152610212565b50346101b35760003660031901126101b3576020600354604051908152f35b5060203660031901126101b35761028b610999565b506103c960405161029b8161084d565b60043581526102ae60016000541461136f565b61031b6102bc6101fc6108c1565b916102d86102d36102cf60045460ff1690565b1590565b61138f565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a15180159081156103d5575b506113af565b61032534156113cf565b6103413360018060a01b0361033a84516103e1565b16146113ef565b60c061034b610d7d565b9161035f61035982516103e1565b84610a0f565b60208101516020840152604081015160408401526060810151606084015261039661038d60808301516103e1565b60808501610a0f565b60a081015160a0840152600082840152600060e08401524361010084015201516101208201526000610140820152611baf565b60405160008152602090f35b90506001541438610315565b6001600160a01b031690565b6001600160a01b038116036101b357565b5060403660031901126101b3576101af6104a560243561041d816103ed565b610425610999565b61049e816104316109f6565b60043581526001600160a01b039485166020808301918252604051909690916104598361080a565b6104616109f6565b83528783019361046f610a4a565b85525183515251168682510152600082515251858251015261048f610a98565b90600082525185820152610e06565b0151151590565b60405190151581529081906020820190565b50346101b35760003660031901126101b3576020600154604051908152f35b50346101b35760003660031901126101b3576101af60806104f5610999565b600054600481101561052857600161050d911461142f565b602061020b61051a6108c1565b828082518301019101611d76565b6004610534911461140f565b602061024c6105416108c1565b828082518301019101610bd2565b50346101b35760003660031901126101b357610569610999565b5060405163100960cb60e01b8152600b6004820152602490fd5b50346101b3576000806003193601126105f55780546105a06108c1565b906040519283918252602090604082840152835191826040850152815b8381106105de57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016105bd565b80fd5b50346101b35760003660031901126101b3576101af60e0610617610999565b600054600481101561063c57600161062f911461146f565b606061020b6101fc6108c1565b6004610648911461144f565b606061024c61023d6108c1565b5060a03660031901126101b35760243561066e816103ed565b6040806043193601126101b35761073c816101af9361049e61068e610999565b8092610698610a1e565b60043581526001600160a01b03909116602082019081528582016106bb36611d3d565b8152606083019060843582526107066106fc8951946106d98661080a565b6106e1610a1e565b865260208601966106f0610a4a565b885251865152516103e1565b6020855101610a0f565b5187835101525160608251015261071e825160019052565b51858251015261072c610a98565b9060008252516020820152610e06565b905190151581529081906020820190565b50346101b35760003660031901126101b357610767610999565b6004600054036107a05760c060209160e06107916107836108c1565b858082518301019101610bd2565b01519182910152604051908152f35b60405163100960cb60e01b8152600c6004820152602490fd5b90600182811c921680156107e9575b60208310146107d357565b634e487b7160e01b600052602260045260246000fd5b91607f16916107c8565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761082557604052565b61082d6107f3565b604052565b606081019081106001600160401b0382111761082557604052565b602081019081106001600160401b0382111761082557604052565b608081019081106001600160401b0382111761082557604052565b60a081019081106001600160401b0382111761082557604052565b601f909101601f19168101906001600160401b0382119082101761082557604052565b60405190600082600254916108d5836107b9565b80835260019380851690811561094b57506001146108fd575b506108fb9250038361089e565b565b60026000908152600080516020611ea883398151915294602093509091905b8183106109335750506108fb9350820101386108ee565b8554888401850152948501948794509183019161091c565b90506108fb94506020925060ff191682840152151560051b820101386108ee565b6040519061014082016001600160401b0381118382101761082557604052565b604051906108fb82610832565b6040519061010082016001600160401b038111838210176109e9575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b6109f16107f3565b6109b5565b60405190610a038261080a565b60006020838281520152565b6001600160a01b039091169052565b60405190610a2b82610868565b6000606083828152826020820152610a416109f6565b60408201520152565b60405190610a5782610832565b8160008152610a646109f6565b60208201526040610a73610a1e565b910152565b60021115610a8257565b634e487b7160e01b600052602160045260246000fd5b60405190610aa58261080a565b81600081526020610a73610a4a565b60405190610ac182610868565b81610aca6109f6565b8152610ad4610a1e565b6020820152610ae16109f6565b60408201526060610a736109f6565b51906108fb826103ed565b81601f820112156101b35760405191610b138361084d565b826020928381019283116101b357905b828210610b31575050505090565b8380918351610b3f816103ed565b815201910190610b23565b519081151582036101b357565b9080601f830112156101b357604091825192610b728461084d565b83606093848401938185116101b357915b848310610b935750505050505090565b85838303126101b35783518691610ba982610832565b845182526020918286015183820152610bc3878701610b4a565b87820152815201920191610b83565b610180818303126101b35761016090610be961096c565b92610bf382610af0565b8452602082015160208501526040820151604085015260608201516060850152610c1f60808301610af0565b6080850152610c318160a08401610afb565b60a0850152610c4260c08301610b4a565b60c085015260e082015160e0850152610c6061010091828401610b57565b90840152015161012082015290565b6001600160a01b039182168152825160208083019190915292830151805161014083019594929390926002841015610a8257604060609361012095828801528383808301518051888b01520151166080880152015191825160a0870152818301511660c0860152604082015190815160e0870152600180851b0319910151166101008501520151910152565b516002811015610a825790565b906001811015610d195760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040805191610d3d8361084d565b8291600090815b602080821015610d74579060209184845191610d5f83610832565b81835282015284848201528188015201610d44565b50505050909150565b6040519061016082016001600160401b03811183821017610df9575b60405281610140600091828152826020820152826040820152826060820152826080820152604051610dca8161084d565b602036823760a08201528260c08201528260e082015282610100820152610def610d2f565b6101208201520152565b610e016107f3565b610d99565b610e0e610ab4565b91610e1d60046000541461148f565b610e2861023d6108c1565b90610e40610e3b6102cf60045460ff1690565b6114af565b60206040937fb6ab7ec55424ded9714d693a3b34da00da98e78539004c3f807b8122d56ac288855180610e74843383610c6f565b0390a1610e8c815180159081156112d2575b506114cf565b01610e978151610cfb565b610ea081610a78565b6111345793600060206110fc93816108fb985101518452610ec1341561156f565b828785015152600182888601510152610ede606085015160019052565b828260608601510152610f09610f04610efa60808901516103e1565b8651519033611757565b61158f565b610f1684515115156115af565b8651600081527f343dd9b3bcce06b3ccde8900c868e1e2830597d78ed17e7bba86839fb3f330e990602090a1015280610f4d610d7d565b94610f61610f5b86516103e1565b87610a0f565b60208501516020870152808501518187015260608501516060870152610f96610f8d60808701516103e1565b60808801610a0f565b60a085015160a0870152610fb9610fb060c0870151151590565b151560c0880152565b610fca60e086015183515190611317565b60e08701526110f7610100438189015280870151926110dd816110d58a602083611038828260018060a01b0360a0870151511661101261100d60808901516103e1565b6103e1565b149d8e1561112a578260608201515b01519e15611123576060915001515b01518b610d08565b51518c5151019b8261108b8a86015161105c60a088015160018060a01b0390511690565b61106c61100d60808a01516103e1565b6001600160a01b0390911603611119578260608501515b015190610d08565b5101519884015160a0850151519094906110b79061100d906080906001600160a01b03169301516103e1565b6001600160a01b039091160361111257606091500151015190610d08565b510151151590565b916110e661098c565b968752602087015285019015159052565b6117f7565b9061012091828401520151610140820152611baf565b0151611083565b8285850151611083565b0151611030565b8282820151611021565b909260016111428351610cfb565b61114b81610a78565b14611158575b5050505050565b6112c8946020826110fc94510151910190815261117534156114ef565b6112c3608085019561119861119361118d89516103e1565b336116fc565b61150f565b6111a5835151151561152f565b610100600085828901936111c085515151885151111561154f565b6111d86111cd8c516103e1565b8851519033906115cf565b8151600081527fa7d9b632d97d4cfec6c1a2f1f0f01793ca73fd63b37cb37705e389537c0e277090602090a1015261125361124a611214610d7d565b996112286112228b516103e1565b8c610a0f565b60208a015160208c0152878a0151888c015260608a015160608c0152516103e1565b60808a01610a0f565b60a087015160a089015261127661126d60c0890151151590565b151560c08a0152565b61128760e0880151855151906112f5565b60e08901524390880152519182519081519051519003938060208301519201511515916112b261098c565b958652602086015284019015159052565b61179a565b3880808080611151565b90506001541438610e86565b50634e487b7160e01b600052601160045260246000fd5b919082019182811161130a575b82106101b357565b6113126112de565b611302565b9081039081116113245790565b61132c6112de565b90565b1561133657565b60405163100960cb60e01b815260086004820152602490fd5b1561135657565b60405163100960cb60e01b815260076004820152602490fd5b1561137657565b60405163100960cb60e01b815260126004820152602490fd5b1561139657565b60405163100960cb60e01b815260136004820152602490fd5b156113b657565b60405163100960cb60e01b815260146004820152602490fd5b156113d657565b60405163100960cb60e01b815260156004820152602490fd5b156113f657565b60405163100960cb60e01b815260166004820152602490fd5b1561141657565b60405163100960cb60e01b8152600a6004820152602490fd5b1561143657565b60405163100960cb60e01b815260096004820152602490fd5b1561145657565b60405163100960cb60e01b8152600e6004820152602490fd5b1561147657565b60405163100960cb60e01b8152600d6004820152602490fd5b1561149657565b60405163100960cb60e01b815260176004820152602490fd5b156114b657565b60405163100960cb60e01b815260186004820152602490fd5b156114d657565b60405163100960cb60e01b815260196004820152602490fd5b156114f657565b60405163100960cb60e01b8152601d6004820152602490fd5b1561151657565b60405163100960cb60e01b8152601e6004820152602490fd5b1561153657565b60405163100960cb60e01b8152601f6004820152602490fd5b1561155657565b60405163100960cb60e01b815260206004820152602490fd5b1561157657565b60405163100960cb60e01b8152601a6004820152602490fd5b1561159657565b60405163100960cb60e01b8152601b6004820152602490fd5b156115b657565b60405163100960cb60e01b8152601c6004820152602490fd5b6000919061163493838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261160d81610868565b5193165af161162461161d61163b565b809261169c565b5060208082518301019101611688565b156101b357565b3d15611683573d906001600160401b038211611676575b6040519161166a601f8201601f19166020018461089e565b82523d6000602084013e565b61167e6107f3565b611652565b606090565b908160209103126101b35761132c90610b4a565b156116a45790565b8051156116b357805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156116d45790565b8051156116e357805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600061132c928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261174081610883565b5193165af161162461175061163b565b80926116cc565b60009161132c9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261174081610883565b91906117a4610d2f565b9260005b600181106117b65750508252565b806117c360019284610d08565b516117ce8288610d08565b526117d98187610d08565b5060001981146117ea575b016117a8565b6117f26112de565b6117e4565b9291611801610d2f565b9360005b60018110611828575050906118259161181e8286610d08565b5283610d08565b50565b8061183560019284610d08565b516118408289610d08565b5261184b8188610d08565b50600019811461185c575b01611805565b6118646112de565b611856565b506040513d6000823e3d90fd5b818110611881575050565b60008155600101611876565b6118986002546107b9565b806118a05750565b601f81116001146118b357506000600255565b60026000526118f890601f0160051c600080516020611ea8833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611876565b6000602081208160025555565b6040519061014082016001600160401b0381118382101761197a575b604052816101206000918281528260208201528260408201528260608201528260808201526040516119528161084d565b602036823760a08201528260c08201528260e0820152611970610d2f565b6101008201520152565b6119826107f3565b611921565b6000915b6001831061199857505050565b81516001600160a01b03168152600192909201916020918201910161198b565b6000915b600183106119c957505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906119bc565b81516001600160a01b031681526101808101929161016090610120906020818101519085015260408082015190850152606080820151908501526080808201516001600160a01b031690850152611a5760a082015160a0860190611987565b60c08181015115159085015260e081015160e0850152611a8061010080830151908601906119b8565b0151910152565b90601f8211611a94575050565b6108fb9160026000526020600020906020601f840160051c83019310611ac2575b601f0160051c0190611876565b9091508190611ab5565b80519091906001600160401b038111611ba2575b611af481611aef6002546107b9565b611a87565b602080601f8311600114611b305750819293600092611b25575b50508160011b916000199060031b1c191617600255565b015190503880611b0e565b6002600052601f19831694909190600080516020611ea8833981519152926000905b878210611b8a575050836001959610611b71575b505050811b01600255565b015160001960f88460031b161c19169055388080611b66565b80600185968294968601518155019501930190611b52565b611baa6107f3565b611ae0565b60c0810190611bbe8251151590565b15611d3657610120810151516040015115611d365760005b15611cae57611ca96108fb92611c9b92611c58611c4f611bf4611905565b93611c08611c0285516103e1565b86610a0f565b602084015160208601526040840151604086015260608401516060860152611c3f611c3660808601516103e1565b60808701610a0f565b60a084015160a086015251151590565b151560c0840152565b60e081015160e08301526101406101209182810151610100850152015190820152611c836004600055565b611c8c43600155565b604051928391602083016119f8565b03601f19810183528261089e565b611acc565b611d0a91506000808080611cc561100d86516103e1565b61014086015190828215611d2d575bf115611d20575b611ce860808201516103e1565b610120611cf583516103e1565b9201515151916001600160a01b0316906115cf565b60008055611d186000600155565b6108fb61188d565b611d28611869565b611cdb565b506108fc611cd4565b6001611bd6565b60409060431901126101b35760405190611d568261080a565b6044358252606435826001600160601b0319821682036101b35760200152565b90610120828203126101b35760405191611dfe919060c09060e085016001600160401b03811186821017611e06575b6040528051611db3816103ed565b85526020810151602086015260408101516040860152606081015160608601526080810151611de1816103ed565b6080860152611df38360a08301610afb565b60a086015201610b57565b60c082015290565b611e0e6107f3565b611da5565b9060a06083198301126101b357604051608081016001600160401b03811182821017611e9a575b60405260408193608435835260a435611e52816103ed565b602084015260c31901126101b357604051611e6c8161080a565b60c435815260e4356001600160601b0319811681036101b35760208201526040820152606061010435910152565b611ea26107f3565b611e3a56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a608060405234620004b65762001002803803806200001d81620006a4565b92833981019060c081830312620004b65780516001600160401b0390818111620004b657836200004f918401620006ca565b9260209384840151838111620004b657826200006d918601620006ca565b936040810151848111620004b6578362000089918301620006ca565b92606082015190858211620004b657620000a5918301620006ca565b9560a0608083015192015195835192868411620005a4576003958654946001968787811c9716801562000699575b8688101462000683578190601f978881116200062d575b508690888311600114620005c657600092620005ba575b5050600019828a1b1c191690871b1787555b8251888111620005a45760049384548881811c9116801562000599575b8782101462000584579081888493116200052e575b508690888311600114620004c757600092620004bb575b5050600019828a1b1c191690871b1783555b600580546001600160a01b03191633908117825590929015620004b65762000199816002546200073c565b60025533600052600085526040600020620001b68282546200073c565b905560405190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef863393a3805190888211620004a1576006548781811c9116801562000496575b8682101462000481579081878493116200042c575b508590878311600114620003c357600092620003b7575b505060001982891b1c191690861b176006555b8851968711620003a257600754918583811c9316801562000397575b8484101462000382575083821162000338575b505080918511600114620002c85750839291839160ff97600095620002bc575b50501b92600019911b1c1916176007555b1660ff1960085416176008556040516108a19081620007618239f35b0151935038806200028f565b91939290601f19841696600760005283600020936000905b898210620003205750508460ff981062000305575b50505050811b01600755620002a0565b01519060f884600019921b161c1916905538808080620002f5565b808885978294968601518155019601930190620002e0565b6007600052826000209084808901821c830193858a1062000378575b01901c019084905b8281106200036b57506200026f565b600081550184906200035c565b9350829362000354565b602290634e487b7160e01b6000525260246000fd5b92607f16926200025c565b604182634e487b7160e01b6000525260246000fd5b0151905038806200022d565b90889350601f198316916006600052876000209260005b89828210620004155750508411620003fc575b505050811b0160065562000240565b0151600019838b1b60f8161c19169055388080620003ed565b8385015186558c97909501949384019301620003da565b90915060066000528560002087808501861c82019288861062000477575b918a918695949301871c01915b8281106200046757505062000216565b600081558594508a910162000457565b925081926200044a565b602285634e487b7160e01b6000525260246000fd5b90607f169062000201565b604184634e487b7160e01b6000525260246000fd5b600080fd5b0151905038806200015c565b90899350601f1983169187600052886000209260005b8a828210620005175750508411620004fe575b505050811b0183556200016e565b0151600019838c1b60f8161c19169055388080620004f0565b8385015186558d97909501949384019301620004dd565b90915085600052866000208880850160051c8201928986106200057a575b918b91869594930160051c01915b8281106200056a57505062000145565b600081558594508b91016200055a565b925081926200054c565b602286634e487b7160e01b6000525260246000fd5b90607f169062000130565b634e487b7160e01b600052604160045260246000fd5b01519050388062000101565b90899350601f198316918b600052886000209260005b8a828210620006165750508411620005fd575b505050811b01875562000113565b0151600019838c1b60f8161c19169055388080620005ef565b8385015186558d97909501949384019301620005dc565b90915089600052866000208880850160051c82019289861062000679575b918b91869594930160051c01915b82811062000669575050620000ea565b600081558594508b910162000659565b925081926200064b565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000d3565b6040519190601f01601f191682016001600160401b03811183821017620005a457604052565b919080601f84011215620004b65782516001600160401b038111620005a45760209062000700601f8201601f19168301620006a4565b92818452828287010111620004b65760005b8181106200072857508260009394955001015290565b858101830151848201840152820162000712565b919082018092116200074a57565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461065757508163095ea7b31461062d57816318160ddd1461060e57816323b872dd14610587578163313ce56714610565578163392f37e9146104a9578163395093511461045957816342966c68146103c35781635600f04f1461030757816370a08231146102d057816383197ef0146102a057816395d89b411461019f57508063a457c2d714610145578063a9059cbb146101155763dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e661075a565b6100ee610775565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b503461011157806003193601126101115760209061013e61013461075a565b60243590336107ae565b5160018152f35b503461011157806003193601126101115761015e61075a565b338352600160209081528284206001600160a01b03831685529052818320549092602435919082821061019c57509261013e91602094039033610813565b80fd5b838334610111578160031936011261011157805190828454600181811c90808316928315610296575b602093848410811461028357838852908115610267575060011461022f575b505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061025357505050508301018580806101e7565b80548886018301529301928490820161023d565b60ff1916878501525050151560051b84010190508580806101e7565b634e487b7160e01b895260228a52602489fd5b91607f16916101c8565b833461019c578060031936011261019c576005546001600160a01b0316903382900361019c5760025461019c5750ff5b5050346101115760203660031901126101115760209181906001600160a01b036102f861075a565b16815280845220549051908152f35b83833461011157816003193601126101115780519082600654600181811c908083169283156103b9575b602093848410811461028357838852908115610267575060011461038057505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060068652828620918387935b8385106103a557505050508301018580806101e7565b80548886018301529301928490820161038f565b91607f1691610331565b82843461019c57602036600319011261019c576005546001600160a01b0316833533829003610455578115610455578183528260205283832054818110610451578190038484205560025481810390811161043e57602095506000805160206108758339815191529186916002558551908152a35160018152f35b634e487b7160e01b845260118652602484fd5b8380fd5b8280fd5b50503461011157806003193601126101115761013e6020926104a261047c61075a565b338352600186528483206001600160a01b0382168452865291849020546024359061078b565b9033610813565b83833461011157816003193601126101115780519082600754600181811c9080831692831561055b575b602093848410811461028357838852908115610267575060011461052257505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060078652828620918387935b83851061054757505050508301018580806101e7565b805488860183015293019284908201610531565b91607f16916104d3565b50503461011157816003193601126101115760209060ff600854169051908152f35b505034610111576060366003190112610111576105a261075a565b6105aa610775565b6001600160a01b03821684526001602081815284862033875290528385205460443595929392909182016105e7575b60208561013e8887876107ae565b85821061019c575091849161060460209661013e95033383610813565b91948193506105d9565b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061013e61064d61075a565b6024359033610813565b8490843461045557826003193601126104555782600354600181811c90808316928315610707575b60209384841081146102835783885290811561026757506001146106ce57505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060038652828620918387935b8385106106f357505050508301018580806101e7565b8054888601830152930192849082016106dd565b91607f169161067f565b6020808252825181830181905290939260005b82811061074657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610724565b600435906001600160a01b038216820361077057565b600080fd5b602435906001600160a01b038216820361077057565b9190820180921161079857565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610770571691821561077057600082815280602052604081205482811061011157916040602092826000805160206108758339815191529503828220558681522061080882825461078b565b9055604051908152a3565b6001600160a01b0390811691821561077057169182156107705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000811000a`,
  BytecodeLen: 14688,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './mint.rsh:48:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './mint.rsh:93:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './mint.rsh:53:47:after expr stmt semicolon',
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
  "UserAPI_burnToken": UserAPI_burnToken,
  "UserAPI_mintToken": UserAPI_mintToken
  };
export const _APIs = {
  UserAPI: {
    burnToken: UserAPI_burnToken,
    mintToken: UserAPI_mintToken
    }
  };

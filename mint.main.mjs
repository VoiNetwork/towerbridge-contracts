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
      return (await ((async () => {
        
        
        return v497;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v485, v486, v487, v492, v497, v510, v522, v523, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v497;}))(...args));
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
          const v1191 = v522;
          const v1192 = v687;
          const v1194 = v674;
          const v1195 = v531;
          const v1196 = v674[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
          const v1197 = v1196[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
          const v1198 = v1197 ? false : true;
          const v1199 = v522 ? v1198 : true;
          if (v1199) {
            sim_r.isHalt = false;
            }
          else {
            const v1201 = v1196[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
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
      const v1191 = v522;
      const v1192 = v687;
      const v1194 = v674;
      const v1195 = v531;
      const v1196 = v674[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
      const v1197 = v1196[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
      const v1198 = v1197 ? false : true;
      const v1199 = v522 ? v1198 : true;
      if (v1199) {
        return;
        }
      else {
        const v1201 = v1196[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
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
          const v1224 = v522;
          const v1225 = v827;
          const v1227 = v816;
          const v1228 = v531;
          const v1229 = v816[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
          const v1230 = v1229[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
          const v1231 = v1230 ? false : true;
          const v1232 = v522 ? v1231 : true;
          if (v1232) {
            sim_r.isHalt = false;
            }
          else {
            const v1234 = v1229[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
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
      const v1224 = v522;
      const v1225 = v827;
      const v1227 = v816;
      const v1228 = v531;
      const v1229 = v816[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '0')];
      const v1230 = v1229[stdlib.checkedBigNumberify('./mint.rsh:59:41:application', stdlib.UInt_max, '2')];
      const v1231 = v1230 ? false : true;
      const v1232 = v522 ? v1231 : true;
      if (v1232) {
        return;
        }
      else {
        const v1234 = v1229[stdlib.checkedBigNumberify('./mint.rsh:92:34:application', stdlib.UInt_max, '0')];
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
  appApproval: `CCAKAAQBCBGgjQYgKDA4JgIAAQAxGEEEDihkSSJbNQElWzUCKWSCCgQM2AYeBBYqP8YEK9PAvgRHCUvrBKOXyIEEx91LEQTZUC2gBN/ZIygE4K7wAQT97aO+NhoAjgoEkQABA44DqQBSBJcEXQOeBFoElAA2GgEXNhoCNQs1DCWvKTQMFjQLUFCBPK9QUDULIzQBEkSIBHU0CyJbNQw0C1cIZTUNgAS28Sq0NAwWUDQNULA0DIgEwDQNIlWNAgOFA4hC/642GgEXNhoCNhoDNhoEFzULNQw1DTUOJa+AAQE0DhY0DVA0DFA0CxZQUFA1C0L/nDQNVwEoIls1C4AJAAAAAAAAAAABgAkBAAAAAAAAAAA0EyJbNBQSTSRbNRk0DyEENBkLIQRYNQ00CzQUMRY0ACQISTUACUcDOBQyChJEOBAjEkQ4EU8CEkQ4EhJENAsiDUQoNQyACAAAAAAAAAKnNAxQsDQMNQQ0ETQLCTIGNA80GSEECzQNSSJbNAsIFlwAXTUPNRA1ETQPVwARNQs0EhQ0C1cQARcUEUECrjQYNBcWUDQWFlA0FRZQNBQWUDQTUDQSFlEHCFA0ERZQNA9QNA4WUCMyBjUCNQEpTFcAamcoNAEWNAIWUGcxGSISRIgDpDQDQAAKgAQVH3x1NARQsCRDNA1XAWQiW0k1CyINRDQPVwARSTUZIltJNQ00Cw9ENAs0FDEAiAN8KDUMgAgAAAAAAAADMTQMULA0DDUENBE0CwgyBjQPNBk0DTQLCRZcAFwANQ81EDURQv87NAEjDEECNzQBJBJEiALsNBYWNQQxGSISREL/fjQBIwxBAis0ASQSRIgC0DQXFjUEQv/hNAEjDEECJDQBJBJEiAK5NBQWNQRC/8o0ASMSRIgCbDQRFjUEQv+6NAEjDEECDTQBJBJEiAKSNBUWNQRC/6MxADUYNAsiWzUMNAslWzUXNAuBEFs1FjQLVxggNRE0C1c4CDUQNAtXQGA1DzQLV6AgNQ40C4HAAVs1FTQLgcgBWzUNgASOOefvNAwWUDQXFlA0FhZQNBFQNBBQNA9QNA5QNBUWUDQNFlCwNAyIAkkhBK81CyEFiAJJsSKyAYEDshA0FbIiNA2yIzQQsiU0EbImNA+yJzQOsigyCrIps7Q8NQyACAAAAAAAAAHwNAwWULA0DDUUNAtJVwARNBUWXABcADUMJa80FBZcADUTNAxJVwARNBUWXAhcAEk1C0lXABEpXBBcADUNNBg0FxZQNBYWUDQVFlA0FBZQNBNQNA1QIQSvUCQyBkL9/yQ0ARJEiAF4NAsXNQyABNUVGRQ0DBZQsDQMiAGRNBgxABJEIiIyBjQNIjUONQ81EDURNRJC/YmIAXAhBYgBeTYaATULQv6viAFgNhoBNQtC/66IAVU2GgE1C0L8aSIxNBJEgQIxNRJEIjE2EkQiMTcSRIgBNYFqryIiQv2CQvyqQv2oNA40GIgBQDQLIls0FDQYiAE5MRmBBRJEiAEgIjIKMgmIASxC/XEisgEkshCyB7IIs4kisgEjshCyFLIRshKziTQBIxJEiAB4NBYWNQRC/cY0ASMSRIgAaDQXFjUEQv22NAEjEkSIAFg0FBY1BEL9pjQBIxJEiABINBUWNQRC/ZZC/X9C/ZhIiUwJSTUGMgmIALWJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJQv2SQv2fQv11SVcAIDUYSSEGWzUXSSEHWzUWSSEIWzUVSSEJWzUUSVdACDUTSVdIARc1EkmBSVs1EUlXURE1D4FiWzUOiUlXACA1GEkhBls1F0khB1s1FkkhCFs1FUkhCVs1FElXQAg1E1dIETUNiSQ1A4lJIhJMNAISEUSJNAYINQaJNAY0B0oPQf9EQv9MsUL+27FC/uOxsglC/tE=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `20`,
    1000: `566`,
    1001: `567`,
    1002: `567`,
    1003: `568`,
    1004: `569`,
    1005: `572`,
    1006: `573`,
    1007: `574`,
    1008: `574`,
    1009: `575`,
    101: `20`,
    1010: `575`,
    1011: `576`,
    1012: `577`,
    1013: `577`,
    1014: `578`,
    1015: `578`,
    1016: `579`,
    1017: `579`,
    1018: `580`,
    1019: `580`,
    102: `20`,
    1020: `581`,
    1021: `581`,
    1022: `582`,
    1023: `582`,
    1024: `582`,
    1025: `584`,
    1026: `584`,
    1027: `584`,
    1028: `585`,
    1029: `585`,
    103: `20`,
    1030: `586`,
    1031: `586`,
    1032: `586`,
    1033: `587`,
    1034: `587`,
    1035: `587`,
    1036: `588`,
    1037: `588`,
    1038: `589`,
    1039: `589`,
    104: `20`,
    1040: `589`,
    1041: `591`,
    1042: `591`,
    1043: `591`,
    1044: `592`,
    1045: `592`,
    1046: `592`,
    1047: `593`,
    1048: `593`,
    1049: `594`,
    105: `20`,
    1050: `594`,
    1051: `594`,
    1052: `596`,
    1053: `596`,
    1054: `596`,
    1055: `597`,
    1056: `597`,
    1057: `597`,
    1058: `598`,
    1059: `598`,
    106: `20`,
    1060: `599`,
    1061: `599`,
    1062: `599`,
    1063: `601`,
    1064: `602`,
    1065: `602`,
    1066: `603`,
    1067: `604`,
    1068: `605`,
    1069: `605`,
    107: `20`,
    1070: `606`,
    1071: `606`,
    1072: `607`,
    1073: `608`,
    1074: `609`,
    1075: `610`,
    1076: `610`,
    1077: `611`,
    1078: `612`,
    1079: `613`,
    108: `20`,
    1080: `614`,
    1081: `614`,
    1082: `615`,
    1083: `616`,
    1084: `617`,
    1085: `617`,
    1086: `617`,
    1087: `618`,
    1088: `618`,
    1089: `619`,
    109: `20`,
    1090: `620`,
    1091: `621`,
    1092: `622`,
    1093: `622`,
    1094: `622`,
    1095: `624`,
    1096: `624`,
    1097: `624`,
    1098: `626`,
    1099: `626`,
    11: `2`,
    110: `20`,
    1100: `626`,
    1101: `628`,
    1102: `628`,
    1103: `630`,
    1104: `630`,
    1105: `631`,
    1106: `631`,
    1107: `631`,
    1108: `632`,
    1109: `632`,
    111: `20`,
    1110: `633`,
    1111: `634`,
    1112: `636`,
    1113: `636`,
    1114: `637`,
    1115: `637`,
    1116: `638`,
    1117: `638`,
    1118: `638`,
    1119: `640`,
    112: `20`,
    1120: `640`,
    1121: `641`,
    1122: `641`,
    1123: `642`,
    1124: `643`,
    1125: `645`,
    1126: `645`,
    1127: `645`,
    1128: `647`,
    1129: `648`,
    113: `20`,
    1130: `648`,
    1131: `649`,
    1132: `649`,
    1133: `650`,
    1134: `650`,
    1135: `650`,
    1136: `651`,
    1137: `651`,
    1138: `651`,
    1139: `653`,
    114: `20`,
    1140: `654`,
    1141: `654`,
    1142: `655`,
    1143: `656`,
    1144: `656`,
    1145: `657`,
    1146: `657`,
    1147: `658`,
    1148: `658`,
    1149: `659`,
    115: `22`,
    1150: `660`,
    1151: `662`,
    1152: `663`,
    1153: `663`,
    1154: `664`,
    1155: `665`,
    1156: `665`,
    1157: `666`,
    1158: `666`,
    1159: `667`,
    116: `24`,
    1160: `667`,
    1161: `668`,
    1162: `668`,
    1163: `669`,
    1164: `670`,
    1165: `672`,
    1166: `672`,
    1167: `673`,
    1168: `674`,
    1169: `675`,
    117: `24`,
    1170: `678`,
    1171: `678`,
    1172: `678`,
    1173: `679`,
    1174: `679`,
    1175: `680`,
    1176: `681`,
    1177: `681`,
    1178: `682`,
    1179: `682`,
    118: `24`,
    1180: `682`,
    1181: `684`,
    1182: `684`,
    1183: `685`,
    1184: `686`,
    1185: `687`,
    1186: `690`,
    1187: `690`,
    1188: `690`,
    1189: `691`,
    119: `25`,
    1190: `691`,
    1191: `692`,
    1192: `693`,
    1193: `693`,
    1194: `694`,
    1195: `694`,
    1196: `694`,
    1197: `696`,
    1198: `696`,
    1199: `697`,
    12: `2`,
    120: `26`,
    1200: `698`,
    1201: `699`,
    1202: `702`,
    1203: `702`,
    1204: `702`,
    1205: `703`,
    1206: `703`,
    1207: `704`,
    1208: `705`,
    1209: `705`,
    121: `26`,
    1210: `706`,
    1211: `706`,
    1212: `706`,
    1213: `708`,
    1214: `708`,
    1215: `709`,
    1216: `710`,
    1217: `711`,
    1218: `714`,
    1219: `714`,
    122: `26`,
    1220: `714`,
    1221: `715`,
    1222: `715`,
    1223: `716`,
    1224: `717`,
    1225: `717`,
    1226: `718`,
    1227: `718`,
    1228: `718`,
    1229: `720`,
    123: `27`,
    1230: `720`,
    1231: `720`,
    1232: `722`,
    1233: `722`,
    1234: `722`,
    1235: `724`,
    1236: `725`,
    1237: `727`,
    1238: `728`,
    1239: `729`,
    124: `27`,
    1240: `730`,
    1241: `730`,
    1242: `731`,
    1243: `731`,
    1244: `732`,
    1245: `732`,
    1246: `732`,
    1247: `733`,
    1248: `735`,
    1249: `736`,
    125: `28`,
    1250: `737`,
    1251: `737`,
    1252: `737`,
    1253: `738`,
    1254: `739`,
    1255: `739`,
    1256: `742`,
    1257: `742`,
    1258: `743`,
    1259: `743`,
    126: `28`,
    1260: `744`,
    1261: `745`,
    1262: `746`,
    1263: `747`,
    1264: `747`,
    1265: `748`,
    1266: `749`,
    1267: `749`,
    1268: `750`,
    1269: `750`,
    127: `30`,
    1270: `751`,
    1271: `751`,
    1272: `752`,
    1273: `753`,
    1274: `754`,
    1275: `754`,
    1276: `755`,
    1277: `756`,
    1278: `757`,
    1279: `758`,
    128: `31`,
    1280: `758`,
    1281: `759`,
    1282: `760`,
    1283: `761`,
    1284: `763`,
    1285: `763`,
    1286: `763`,
    1287: `765`,
    1288: `765`,
    1289: `765`,
    129: `32`,
    1290: `767`,
    1291: `767`,
    1292: `767`,
    1293: `769`,
    1294: `770`,
    1295: `770`,
    1296: `770`,
    1297: `771`,
    1298: `771`,
    1299: `772`,
    13: `2`,
    130: `33`,
    1300: `773`,
    1301: `773`,
    1302: `774`,
    1303: `775`,
    1304: `775`,
    1305: `776`,
    1306: `777`,
    1307: `777`,
    1308: `778`,
    1309: `779`,
    131: `33`,
    1310: `779`,
    1311: `780`,
    1312: `781`,
    1313: `781`,
    1314: `782`,
    1315: `783`,
    1316: `783`,
    1317: `784`,
    1318: `785`,
    1319: `785`,
    132: `34`,
    1320: `786`,
    1321: `787`,
    1322: `787`,
    1323: `788`,
    1324: `789`,
    1325: `789`,
    1326: `789`,
    1327: `790`,
    1328: `790`,
    1329: `791`,
    133: `35`,
    1330: `792`,
    1331: `792`,
    1332: `792`,
    1333: `793`,
    1334: `794`,
    1335: `794`,
    1336: `795`,
    1337: `796`,
    1338: `796`,
    1339: `797`,
    134: `35`,
    1340: `798`,
    1341: `798`,
    1342: `799`,
    1343: `800`,
    1344: `800`,
    1345: `800`,
    1346: `801`,
    1347: `801`,
    1348: `802`,
    1349: `802`,
    135: `36`,
    1350: `803`,
    1351: `804`,
    1352: `804`,
    1353: `805`,
    1354: `807`,
    1355: `808`,
    1356: `808`,
    1357: `808`,
    1358: `809`,
    1359: `809`,
    136: `37`,
    1360: `810`,
    1361: `811`,
    1362: `811`,
    1363: `812`,
    1364: `813`,
    1365: `813`,
    1366: `814`,
    1367: `815`,
    1368: `815`,
    1369: `816`,
    137: `38`,
    1370: `817`,
    1371: `817`,
    1372: `818`,
    1373: `819`,
    1374: `819`,
    1375: `820`,
    1376: `821`,
    1377: `821`,
    1378: `822`,
    1379: `823`,
    138: `38`,
    1380: `823`,
    1381: `824`,
    1382: `825`,
    1383: `825`,
    1384: `826`,
    1385: `827`,
    1386: `827`,
    1387: `827`,
    1388: `828`,
    1389: `828`,
    139: `39`,
    1390: `829`,
    1391: `829`,
    1392: `829`,
    1393: `830`,
    1394: `830`,
    1395: `831`,
    1396: `833`,
    1397: `834`,
    1398: `834`,
    1399: `835`,
    14: `2`,
    140: `40`,
    1400: `837`,
    1401: `838`,
    1402: `839`,
    1403: `840`,
    1404: `841`,
    1405: `841`,
    1406: `842`,
    1407: `843`,
    1408: `844`,
    1409: `845`,
    141: `41`,
    1410: `847`,
    1411: `847`,
    1412: `848`,
    1413: `849`,
    1414: `849`,
    1415: `850`,
    1416: `852`,
    1417: `852`,
    1418: `853`,
    1419: `853`,
    142: `42`,
    1420: `854`,
    1421: `855`,
    1422: `856`,
    1423: `856`,
    1424: `856`,
    1425: `857`,
    1426: `857`,
    1427: `857`,
    1428: `859`,
    1429: `860`,
    143: `42`,
    1430: `860`,
    1431: `860`,
    1432: `862`,
    1433: `863`,
    1434: `863`,
    1435: `863`,
    1436: `865`,
    1437: `866`,
    1438: `866`,
    1439: `867`,
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
    643: `356`,
    644: `357`,
    645: `358`,
    646: `359`,
    647: `359`,
    648: `359`,
    649: `360`,
    65: `18`,
    650: `360`,
    651: `361`,
    652: `362`,
    653: `363`,
    654: `366`,
    655: `366`,
    656: `366`,
    657: `367`,
    658: `367`,
    659: `368`,
    66: `18`,
    660: `369`,
    661: `369`,
    662: `370`,
    663: `370`,
    664: `370`,
    665: `372`,
    666: `372`,
    667: `373`,
    668: `374`,
    669: `375`,
    67: `18`,
    670: `378`,
    671: `378`,
    672: `378`,
    673: `379`,
    674: `379`,
    675: `380`,
    676: `381`,
    677: `381`,
    678: `382`,
    679: `382`,
    68: `18`,
    680: `382`,
    681: `384`,
    682: `384`,
    683: `385`,
    684: `386`,
    685: `387`,
    686: `387`,
    687: `387`,
    688: `388`,
    689: `388`,
    69: `18`,
    690: `389`,
    691: `390`,
    692: `391`,
    693: `394`,
    694: `394`,
    695: `394`,
    696: `395`,
    697: `395`,
    698: `396`,
    699: `397`,
    7: `2`,
    70: `18`,
    700: `397`,
    701: `398`,
    702: `398`,
    703: `398`,
    704: `400`,
    705: `400`,
    706: `401`,
    707: `401`,
    708: `402`,
    709: `402`,
    71: `18`,
    710: `403`,
    711: `404`,
    712: `405`,
    713: `405`,
    714: `406`,
    715: `406`,
    716: `407`,
    717: `408`,
    718: `409`,
    719: `409`,
    72: `18`,
    720: `410`,
    721: `410`,
    722: `411`,
    723: `411`,
    724: `412`,
    725: `413`,
    726: `413`,
    727: `414`,
    728: `414`,
    729: `415`,
    73: `18`,
    730: `415`,
    731: `415`,
    732: `416`,
    733: `416`,
    734: `417`,
    735: `417`,
    736: `418`,
    737: `418`,
    738: `418`,
    739: `419`,
    74: `18`,
    740: `419`,
    741: `420`,
    742: `420`,
    743: `421`,
    744: `421`,
    745: `421`,
    746: `422`,
    747: `422`,
    748: `423`,
    749: `423`,
    75: `18`,
    750: `424`,
    751: `424`,
    752: `424`,
    753: `425`,
    754: `425`,
    755: `426`,
    756: `426`,
    757: `427`,
    758: `427`,
    759: `427`,
    76: `18`,
    760: `428`,
    761: `429`,
    762: `429`,
    763: `430`,
    764: `430`,
    765: `431`,
    766: `431`,
    767: `431`,
    768: `432`,
    769: `433`,
    77: `18`,
    770: `433`,
    771: `434`,
    772: `434`,
    773: `434`,
    774: `434`,
    775: `434`,
    776: `434`,
    777: `435`,
    778: `435`,
    779: `436`,
    78: `18`,
    780: `437`,
    781: `438`,
    782: `438`,
    783: `439`,
    784: `440`,
    785: `441`,
    786: `441`,
    787: `442`,
    788: `443`,
    789: `444`,
    79: `18`,
    790: `444`,
    791: `445`,
    792: `446`,
    793: `446`,
    794: `447`,
    795: `448`,
    796: `448`,
    797: `449`,
    798: `450`,
    799: `450`,
    8: `2`,
    80: `18`,
    800: `451`,
    801: `452`,
    802: `452`,
    803: `453`,
    804: `454`,
    805: `455`,
    806: `455`,
    807: `456`,
    808: `457`,
    809: `458`,
    81: `18`,
    810: `460`,
    811: `460`,
    812: `461`,
    813: `461`,
    814: `461`,
    815: `462`,
    816: `462`,
    817: `463`,
    818: `464`,
    819: `464`,
    82: `18`,
    820: `465`,
    821: `465`,
    822: `466`,
    823: `466`,
    824: `466`,
    825: `467`,
    826: `468`,
    827: `469`,
    828: `469`,
    829: `470`,
    83: `18`,
    830: `470`,
    831: `471`,
    832: `471`,
    833: `472`,
    834: `472`,
    835: `473`,
    836: `473`,
    837: `474`,
    838: `474`,
    839: `475`,
    84: `18`,
    840: `475`,
    841: `476`,
    842: `476`,
    843: `477`,
    844: `477`,
    845: `478`,
    846: `478`,
    847: `479`,
    848: `479`,
    849: `480`,
    85: `18`,
    850: `480`,
    851: `481`,
    852: `481`,
    853: `482`,
    854: `482`,
    855: `483`,
    856: `483`,
    857: `484`,
    858: `484`,
    859: `485`,
    86: `18`,
    860: `485`,
    861: `486`,
    862: `487`,
    863: `487`,
    864: `488`,
    865: `488`,
    866: `489`,
    867: `489`,
    868: `489`,
    869: `489`,
    87: `18`,
    870: `489`,
    871: `489`,
    872: `489`,
    873: `489`,
    874: `489`,
    875: `489`,
    876: `490`,
    877: `490`,
    878: `491`,
    879: `492`,
    88: `18`,
    880: `493`,
    881: `494`,
    882: `494`,
    883: `495`,
    884: `495`,
    885: `496`,
    886: `496`,
    887: `497`,
    888: `498`,
    889: `498`,
    89: `18`,
    890: `498`,
    891: `499`,
    892: `499`,
    893: `500`,
    894: `501`,
    895: `501`,
    896: `502`,
    897: `502`,
    898: `503`,
    899: `503`,
    9: `2`,
    90: `19`,
    900: `504`,
    901: `505`,
    902: `506`,
    903: `506`,
    904: `507`,
    905: `508`,
    906: `508`,
    907: `509`,
    908: `509`,
    909: `510`,
    91: `19`,
    910: `510`,
    911: `511`,
    912: `512`,
    913: `512`,
    914: `512`,
    915: `513`,
    916: `513`,
    917: `514`,
    918: `515`,
    919: `515`,
    92: `19`,
    920: `516`,
    921: `516`,
    922: `517`,
    923: `518`,
    924: `518`,
    925: `519`,
    926: `520`,
    927: `520`,
    928: `520`,
    929: `521`,
    93: `20`,
    930: `522`,
    931: `522`,
    932: `523`,
    933: `523`,
    934: `524`,
    935: `524`,
    936: `526`,
    937: `526`,
    938: `527`,
    939: `527`,
    94: `20`,
    940: `528`,
    941: `529`,
    942: `530`,
    943: `530`,
    944: `531`,
    945: `532`,
    946: `533`,
    947: `533`,
    948: `534`,
    949: `535`,
    95: `20`,
    950: `536`,
    951: `536`,
    952: `537`,
    953: `538`,
    954: `539`,
    955: `539`,
    956: `540`,
    957: `541`,
    958: `541`,
    959: `542`,
    96: `20`,
    960: `543`,
    961: `543`,
    962: `544`,
    963: `545`,
    964: `546`,
    965: `547`,
    966: `547`,
    967: `548`,
    968: `548`,
    969: `548`,
    97: `20`,
    970: `550`,
    971: `551`,
    972: `551`,
    973: `552`,
    974: `553`,
    975: `554`,
    976: `554`,
    977: `554`,
    978: `555`,
    979: `555`,
    98: `20`,
    980: `556`,
    981: `557`,
    982: `557`,
    983: `558`,
    984: `558`,
    985: `558`,
    986: `558`,
    987: `558`,
    988: `558`,
    989: `559`,
    99: `20`,
    990: `559`,
    991: `560`,
    992: `561`,
    993: `562`,
    994: `564`,
    995: `564`,
    996: `565`,
    997: `565`,
    998: `565`,
    999: `566`
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T11","name":"elem5","type":"tuple"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"}],"internalType":"struct T12","name":"v1275","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes8","name":"elem4","type":"bytes8"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T11","name":"elem5","type":"tuple"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"uint256","name":"elem7","type":"uint256"},{"internalType":"uint256","name":"elem8","type":"uint256"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_UserAPI_burnToken0_93","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_UserAPI_mintToken0_93","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v496","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v679","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v817","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v1259","type":"uint256"},{"internalType":"address payable","name":"v1260","type":"address"}],"name":"UserAPI_burnToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v1269","type":"uint256"},{"internalType":"address payable","name":"v1270","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"v1271","type":"tuple"},{"internalType":"uint256","name":"v1272","type":"uint256"}],"name":"UserAPI_mintToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T13","name":"v1278","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_UserAPI_burnToken0_93","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes20","name":"elem1","type":"bytes20"}],"internalType":"struct T1","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T2","name":"_UserAPI_mintToken0_93","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v1281","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sourceChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sourceTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wrappedToken","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wrappedTokenMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wrappedTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62003a3238819003906080601f8301601f1916810191906001600160401b03831190831017620007d85782916040526080396101608112620008d4576040519061012082016001600160401b03811183821017620007d8576040908152608051835260a051602084015260c0519083015260e051606083015261010051906001600160c01b031982168203620008d4576060916080840152609f190112620008d457604051620000af81620008d9565b6101205181526101405160208201526101605160408083019190915260a08301919091526101805160c08301526101a05160e08301526101c05161010080840191909152600080554360035590519081018082116001600160401b0390911117620007d85760e081610100600093016040528281528260208201528260408201528260608201528260808201528260a08201528260c082015201526040516200015881620008f5565b6200016262000949565b81526200016e6200096a565b6020820152604051620001818162000911565b602036823760408201526000606082015260006080820152620001a36200096a565b60a0820152620001b26200096a565b60c082015260ff60045416620008bb577f2c3082780f545d3a7ffc2b59f6aca1fc581ee8cc60225304805523773999bd166101806040513381528451602082015260208501516040820152604085015160608201526060850151608082015260018060c01b031960808601511660a0820152604060a0860151805160c0840152602081015160e0840152015161010082015260c085015161012082015260e0850151610140820152610100850151610160820152a181518015908115620008ae575b5015620008955760008151526000602082510152600060408251015280516020820151526000604082015152346200087c57606082015160405190602082015260208152620002c3816200092d565b60808301516040516001600160c01b031990911660208201526008815290620002ec826200092d565b60a0840151918251926040602082015191015190604051946020860152604085015260608401526060835282608081011060018060401b03608085011117620007d85760808301604081905260c086015160a08501526020815262000351906200092d565b60e085015161010086015160405194919290916001600160401b03611002870190811190871117620007d8576080620003db620003c4620003f394620003ad8a9961100262002a308c3960c06110028c018181520190620009ca565b906110028a01820360206110028c010152620009ca565b6110028801810360406110028a01015283620009ca565b916110028701830360606110028901015201620009ca565b9160806110028501015260a06110028401015203906000f0801562000870576001600160a01b031660608201819052608082018190526040519081527f3da5f871c66b2ccbaf51be75477a3fefb87843585db914738b65716e1e15578a90602090a1620004c062000498602083015160e085015190805160406020820151910151151590604051936200048685620008d9565b84526020840152604083015262000a32565b8060a084015260e08401519080519160408351930151151590604051936200048685620008d9565b60c082015260e060405192620004d684620008f5565b6000845260006020850152600060408501526000606085015260006080850152604051620005048162000911565b602036823760a0850152620005186200096a565b60c085015233845260208101516020850152604081015160408501520151606083015260018060a01b036080820151166080830152604081015160018060a01b03608083015116604051916200056e8362000911565b602036843760005b600181106200083c5785620005bf60c0878787815260a085015201518051906020825192015160405192620005ab84620008d9565b835260208301526000604083015262000a32565b60c08201526001600055436001556040519060018060a01b03815116602083015260208101516040830152604081015160608301526060810151608083015260018060a01b0360808201511660a083015260a081015160c083016000905b600182106200081b578460c085015160e082016000905b60018210620007ee5761012084528361014081016001600160401b03811182821017620007d85760405280516001600160401b038111620007d857600254600181811c91168015620007cd575b6020821014620007b757601f81116200074d575b50602091601f8211600114620006e357918192600092620006d7575b50508160011b916000199060031b1c1916176002555b604051611fa6908162000a8a8239f35b015190508280620006b1565b601f19821692600260005260206000209160005b85811062000734575083600195106200071a575b505050811b01600255620006c7565b015160001960f88460031b161c191690558280806200070b565b91926020600181928685015181550194019201620006f7565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620007ac575b601f0160051c01905b8181106200079f575062000695565b6000815560010162000790565b909150819062000787565b634e487b7160e01b600052602260045260246000fd5b90607f169062000681565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000634565b82516001600160a01b0316815260209283019260019290920191016200061d565b6200086a906001600160a01b03620008558285620009a2565b5116620008638287620009a2565b5262000a0c565b62000576565b6040513d6000823e3d90fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b9050600154143862000274565b60405163100960cb60e01b815260106004820152602490fd5b600080fd5b606081019081106001600160401b03821117620007d857604052565b60e081019081106001600160401b03821117620007d857604052565b602081019081106001600160401b03821117620007d857604052565b604081019081106001600160401b03821117620007d857604052565b604051906200095882620008d9565b60006040838281528260208201520152565b60405190620009798262000911565b8160005b602081106200098a575050565b6020906200099762000949565b81840152016200097d565b906001811015620009b45760051b0190565b634e487b7160e01b600052603260045260246000fd5b919082519283825260005b848110620009f7575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201620009d5565b600019811462000a1c5760010190565b634e487b7160e01b600052601160045260246000fd5b919062000a3e6200096a565b9260005b6001811062000a515750508252565b8062000a6262000a839284620009a2565b5162000a6f8288620009a2565b5262000a7c8187620009a2565b5062000a0c565b62000a4256fe60806040526004361015610018575b361561001657005b005b60003560e01c806309eb5248146101085780631544298e146100ff5780631e93b0f1146100f6578063573b8510146100ed57806363512a02146100e457806383230757146100db57806396954dd9146100d2578063996c6cc3146100c9578063ab53f2c6146100c0578063b4cad37e146100b7578063dfcf4def146100ae5763ed25d1380361000e576100a96107df565b61000e565b506100a96106e7565b506100a961068a565b506100a9610615565b506100a961054f565b506100a96104d6565b506100a96104b7565b506100a96103fe565b506100a9610276565b506100a9610257565b506100a96101b8565b506101203660031901126101b35761011e610a2b565b60409081519061012d8261089c565b60043582526101003660231901126101b35782519161014b836108c4565b60243560028110156101b3578352836043193601126101b3576101a59284516101738161089c565b6044358152606435610184816103ed565b6020820152602082015261019736611ee5565b858201526020820152610e98565b5160008152602090f35b0390f35b600080fd5b50346101b35760003660031901126101b3576101af60606101d7610a2b565b60005460048110156102245760016101ef91146113e1565b604061020b6101fc610953565b60208082518301019101611e48565b0151828201525b01516040519081529081906020820190565b600461023091146113c1565b604061024c61023d610953565b60208082518301019101610c64565b015182820152610212565b50346101b35760003660031901126101b3576020600354604051908152f35b5060203660031901126101b35761028b610a2b565b506103c960405161029b816108df565b60043581526102ae600160005414611401565b61031b6102bc6101fc610953565b916102d86102d36102cf60045460ff1690565b1590565b611421565b60408051338152825160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a15180159081156103d5575b50611441565b6103253415611461565b6103413360018060a01b0361033a84516103e1565b1614611481565b60c061034b610e0f565b9161035f61035982516103e1565b84610aa1565b60208101516020840152604081015160408401526060810151606084015261039661038d60808301516103e1565b60808501610aa1565b60a081015160a0840152600082840152600060e08401524361010084015201516101208201526000610140820152611c81565b60405160008152602090f35b90506001541438610315565b6001600160a01b031690565b6001600160a01b038116036101b357565b5060403660031901126101b3576101af6104a560243561041d816103ed565b610425610a2b565b61049e81610431610a88565b60043581526001600160a01b039485166020808301918252604051909690916104598361089c565b610461610a88565b83528783019361046f610adc565b85525183515251168682510152600082515251858251015261048f610b2a565b90600082525185820152610e98565b0151151590565b60405190151581529081906020820190565b50346101b35760003660031901126101b3576020600154604051908152f35b50346101b35760003660031901126101b3576101af60806104f5610a2b565b600054600481101561052857600161050d91146114c1565b602061020b61051a610953565b828082518301019101611e48565b600461053491146114a1565b602061024c610541610953565b828082518301019101610c64565b50346101b35760003660031901126101b3576101af6105b960a0610571610a2b565b60005460048110156105d35760016105899114611501565b6105b26105aa608061059c6101fc610953565b01516001600160a01b031690565b838301610aa1565b01516103e1565b6040516001600160a01b0390911681529081906020820190565b60046105df91146114e1565b6106106105ea610953565b6080610605600180871b039260208082518301019101610c64565b015116838301610aa1565b6105b2565b50346101b357600080600319360112610687578054610632610953565b906040519283918252602090604082840152835191826040850152815b83811061067057505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161064f565b80fd5b50346101b35760003660031901126101b3576101af60e06106a9610a2b565b60005460048110156106ce5760016106c19114611541565b606061020b6101fc610953565b60046106da9114611521565b606061024c61023d610953565b5060a03660031901126101b357602435610700816103ed565b6040806043193601126101b3576107ce816101af9361049e610720610a2b565b809261072a610ab0565b60043581526001600160a01b039091166020820190815285820161074d36611e0f565b81526060830190608435825261079861078e89519461076b8661089c565b610773610ab0565b86526020860196610782610adc565b885251865152516103e1565b6020855101610aa1565b518783510152516060825101526107b0825160019052565b5185825101526107be610b2a565b9060008252516020820152610e98565b905190151581529081906020820190565b50346101b35760003660031901126101b3576107f9610a2b565b6004600054036108325760c060209160e0610823610815610953565b858082518301019101610c64565b01519182910152604051908152f35b60405163100960cb60e01b8152600d6004820152602490fd5b90600182811c9216801561087b575b602083101461086557565b634e487b7160e01b600052602260045260246000fd5b91607f169161085a565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176108b757604052565b6108bf610885565b604052565b606081019081106001600160401b038211176108b757604052565b602081019081106001600160401b038211176108b757604052565b608081019081106001600160401b038211176108b757604052565b60a081019081106001600160401b038211176108b757604052565b601f909101601f19168101906001600160401b038211908210176108b757604052565b60405190600082600254916109678361084b565b8083526001938085169081156109dd575060011461098f575b5061098d92500383610930565b565b60026000908152600080516020611f7a83398151915294602093509091905b8183106109c557505061098d935082010138610980565b855488840185015294850194879450918301916109ae565b905061098d94506020925060ff191682840152151560051b82010138610980565b6040519061014082016001600160401b038111838210176108b757604052565b6040519061098d826108c4565b6040519061010082016001600160401b03811183821017610a7b575b6040528160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b610a83610885565b610a47565b60405190610a958261089c565b60006020838281520152565b6001600160a01b039091169052565b60405190610abd826108fa565b6000606083828152826020820152610ad3610a88565b60408201520152565b60405190610ae9826108c4565b8160008152610af6610a88565b60208201526040610b05610ab0565b910152565b60021115610b1457565b634e487b7160e01b600052602160045260246000fd5b60405190610b378261089c565b81600081526020610b05610adc565b60405190610b53826108fa565b81610b5c610a88565b8152610b66610ab0565b6020820152610b73610a88565b60408201526060610b05610a88565b519061098d826103ed565b81601f820112156101b35760405191610ba5836108df565b826020928381019283116101b357905b828210610bc3575050505090565b8380918351610bd1816103ed565b815201910190610bb5565b519081151582036101b357565b9080601f830112156101b357604091825192610c04846108df565b83606093848401938185116101b357915b848310610c255750505050505090565b85838303126101b35783518691610c3b826108c4565b845182526020918286015183820152610c55878701610bdc565b87820152815201920191610c15565b610180818303126101b35761016090610c7b6109fe565b92610c8582610b82565b8452602082015160208501526040820151604085015260608201516060850152610cb160808301610b82565b6080850152610cc38160a08401610b8d565b60a0850152610cd460c08301610bdc565b60c085015260e082015160e0850152610cf261010091828401610be9565b90840152015161012082015290565b6001600160a01b039182168152825160208083019190915292830151805161014083019594929390926002841015610b1457604060609361012095828801528383808301518051888b01520151166080880152015191825160a0870152818301511660c0860152604082015190815160e0870152600180851b0319910151166101008501520151910152565b516002811015610b145790565b906001811015610dab5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040805191610dcf836108df565b8291600090815b602080821015610e06579060209184845191610df1836108c4565b81835282015284848201528188015201610dd6565b50505050909150565b6040519061016082016001600160401b03811183821017610e8b575b60405281610140600091828152826020820152826040820152826060820152826080820152604051610e5c816108df565b602036823760a08201528260c08201528260e082015282610100820152610e81610dc1565b6101208201520152565b610e93610885565b610e2b565b610ea0610b46565b91610eaf600460005414611561565b610eba61023d610953565b90610ed2610ecd6102cf60045460ff1690565b611581565b60206040937fb6ab7ec55424ded9714d693a3b34da00da98e78539004c3f807b8122d56ac288855180610f06843383610d01565b0390a1610f1e81518015908115611364575b506115a1565b01610f298151610d8d565b610f3281610b0a565b6111c657936000602061118e938161098d985101518452610f533415611641565b828785015152600182888601510152610f70606085015160019052565b828260608601510152610f9b610f96610f8c60808901516103e1565b8651519033611829565b611661565b610fa88451511515611681565b8651600081527f343dd9b3bcce06b3ccde8900c868e1e2830597d78ed17e7bba86839fb3f330e990602090a1015280610fdf610e0f565b94610ff3610fed86516103e1565b87610aa1565b6020850151602087015280850151818701526060850151606087015261102861101f60808701516103e1565b60808801610aa1565b60a085015160a087015261104b61104260c0870151151590565b151560c0880152565b61105c60e0860151835151906113a9565b60e08701526111896101004381890152808701519261116f816111678a6020836110ca828260018060a01b0360a087015151166110a461109f60808901516103e1565b6103e1565b149d8e156111bc578260608201515b01519e156111b5576060915001515b01518b610d9a565b51518c5151019b8261111d8a8601516110ee60a088015160018060a01b0390511690565b6110fe61109f60808a01516103e1565b6001600160a01b03909116036111ab578260608501515b015190610d9a565b5101519884015160a0850151519094906111499061109f906080906001600160a01b03169301516103e1565b6001600160a01b03909116036111a457606091500151015190610d9a565b510151151590565b91611178610a1e565b968752602087015285019015159052565b6118c9565b9061012091828401520151610140820152611c81565b0151611115565b8285850151611115565b01516110c2565b82828201516110b3565b909260016111d48351610d8d565b6111dd81610b0a565b146111ea575b5050505050565b61135a9460208261118e94510151910190815261120734156115c1565b611355608085019561122a61122561121f89516103e1565b336117ce565b6115e1565b6112378351511515611601565b61010060008582890193611252855151518851511115611621565b61126a61125f8c516103e1565b8851519033906116a1565b8151600081527fa7d9b632d97d4cfec6c1a2f1f0f01793ca73fd63b37cb37705e389537c0e277090602090a101526112e56112dc6112a6610e0f565b996112ba6112b48b516103e1565b8c610aa1565b60208a015160208c0152878a0151888c015260608a015160608c0152516103e1565b60808a01610aa1565b60a087015160a08901526113086112ff60c0890151151590565b151560c08a0152565b61131960e088015185515190611387565b60e0890152439088015251918251908151905151900393806020830151920151151591611344610a1e565b958652602086015284019015159052565b61186c565b38808080806111e3565b90506001541438610f18565b50634e487b7160e01b600052601160045260246000fd5b919082019182811161139c575b82106101b357565b6113a4611370565b611394565b9081039081116113b65790565b6113be611370565b90565b156113c857565b60405163100960cb60e01b815260086004820152602490fd5b156113e857565b60405163100960cb60e01b815260076004820152602490fd5b1561140857565b60405163100960cb60e01b815260136004820152602490fd5b1561142857565b60405163100960cb60e01b815260146004820152602490fd5b1561144857565b60405163100960cb60e01b815260156004820152602490fd5b1561146857565b60405163100960cb60e01b815260166004820152602490fd5b1561148857565b60405163100960cb60e01b815260176004820152602490fd5b156114a857565b60405163100960cb60e01b8152600a6004820152602490fd5b156114c857565b60405163100960cb60e01b815260096004820152602490fd5b156114e857565b60405163100960cb60e01b8152600c6004820152602490fd5b1561150857565b60405163100960cb60e01b8152600b6004820152602490fd5b1561152857565b60405163100960cb60e01b8152600f6004820152602490fd5b1561154857565b60405163100960cb60e01b8152600e6004820152602490fd5b1561156857565b60405163100960cb60e01b815260186004820152602490fd5b1561158857565b60405163100960cb60e01b815260196004820152602490fd5b156115a857565b60405163100960cb60e01b8152601a6004820152602490fd5b156115c857565b60405163100960cb60e01b8152601e6004820152602490fd5b156115e857565b60405163100960cb60e01b8152601f6004820152602490fd5b1561160857565b60405163100960cb60e01b815260206004820152602490fd5b1561162857565b60405163100960cb60e01b815260216004820152602490fd5b1561164857565b60405163100960cb60e01b8152601b6004820152602490fd5b1561166857565b60405163100960cb60e01b8152601c6004820152602490fd5b1561168857565b60405163100960cb60e01b8152601d6004820152602490fd5b6000919061170693838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526116df816108fa565b5193165af16116f66116ef61170d565b809261176e565b506020808251830101910161175a565b156101b357565b3d15611755573d906001600160401b038211611748575b6040519161173c601f8201601f191660200184610930565b82523d6000602084013e565b611750610885565b611724565b606090565b908160209103126101b3576113be90610bdc565b156117765790565b80511561178557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156117a65790565b8051156117b557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60006113be928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261181281610915565b5193165af16116f661182261170d565b809261179e565b6000916113be9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261181281610915565b9190611876610dc1565b9260005b600181106118885750508252565b8061189560019284610d9a565b516118a08288610d9a565b526118ab8187610d9a565b5060001981146118bc575b0161187a565b6118c4611370565b6118b6565b92916118d3610dc1565b9360005b600181106118fa575050906118f7916118f08286610d9a565b5283610d9a565b50565b8061190760019284610d9a565b516119128289610d9a565b5261191d8188610d9a565b50600019811461192e575b016118d7565b611936611370565b611928565b506040513d6000823e3d90fd5b818110611953575050565b60008155600101611948565b61196a60025461084b565b806119725750565b601f811160011461198557506000600255565b60026000526119ca90601f0160051c600080516020611f7a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611948565b6000602081208160025555565b6040519061014082016001600160401b03811183821017611a4c575b60405281610120600091828152826020820152826040820152826060820152826080820152604051611a24816108df565b602036823760a08201528260c08201528260e0820152611a42610dc1565b6101008201520152565b611a54610885565b6119f3565b6000915b60018310611a6a57505050565b81516001600160a01b031681526001929092019160209182019101611a5d565b6000915b60018310611a9b57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611a8e565b81516001600160a01b031681526101808101929161016090610120906020818101519085015260408082015190850152606080820151908501526080808201516001600160a01b031690850152611b2960a082015160a0860190611a59565b60c08181015115159085015260e081015160e0850152611b526101008083015190860190611a8a565b0151910152565b90601f8211611b66575050565b61098d9160026000526020600020906020601f840160051c83019310611b94575b601f0160051c0190611948565b9091508190611b87565b80519091906001600160401b038111611c74575b611bc681611bc160025461084b565b611b59565b602080601f8311600114611c025750819293600092611bf7575b50508160011b916000199060031b1c191617600255565b015190503880611be0565b6002600052601f19831694909190600080516020611f7a833981519152926000905b878210611c5c575050836001959610611c43575b505050811b01600255565b015160001960f88460031b161c19169055388080611c38565b80600185968294968601518155019501930190611c24565b611c7c610885565b611bb2565b60c0810190611c908251151590565b15611e0857610120810151516040015115611e085760005b15611d8057611d7b61098d92611d6d92611d2a611d21611cc66119d7565b93611cda611cd485516103e1565b86610aa1565b602084015160208601526040840151604086015260608401516060860152611d11611d0860808601516103e1565b60808701610aa1565b60a084015160a086015251151590565b151560c0840152565b60e081015160e08301526101406101209182810151610100850152015190820152611d556004600055565b611d5e43600155565b60405192839160208301611aca565b03601f198101835282610930565b611b9e565b611ddc91506000808080611d9761109f86516103e1565b61014086015190828215611dff575bf115611df2575b611dba60808201516103e1565b610120611dc783516103e1565b9201515151916001600160a01b0316906116a1565b60008055611dea6000600155565b61098d61195f565b611dfa61193b565b611dad565b506108fc611da6565b6001611ca8565b60409060431901126101b35760405190611e288261089c565b6044358252606435826001600160601b0319821682036101b35760200152565b90610120828203126101b35760405191611ed0919060c09060e085016001600160401b03811186821017611ed8575b6040528051611e85816103ed565b85526020810151602086015260408101516040860152606081015160608601526080810151611eb3816103ed565b6080860152611ec58360a08301610b8d565b60a086015201610be9565b60c082015290565b611ee0610885565b611e77565b9060a06083198301126101b357604051608081016001600160401b03811182821017611f6c575b60405260408193608435835260a435611f24816103ed565b602084015260c31901126101b357604051611f3e8161089c565b60c435815260e4356001600160601b0319811681036101b35760208201526040820152606061010435910152565b611f74610885565b611f0c56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a608060405234620004b65762001002803803806200001d81620006a4565b92833981019060c081830312620004b65780516001600160401b0390818111620004b657836200004f918401620006ca565b9260209384840151838111620004b657826200006d918601620006ca565b936040810151848111620004b6578362000089918301620006ca565b92606082015190858211620004b657620000a5918301620006ca565b9560a0608083015192015195835192868411620005a4576003958654946001968787811c9716801562000699575b8688101462000683578190601f978881116200062d575b508690888311600114620005c657600092620005ba575b5050600019828a1b1c191690871b1787555b8251888111620005a45760049384548881811c9116801562000599575b8782101462000584579081888493116200052e575b508690888311600114620004c757600092620004bb575b5050600019828a1b1c191690871b1783555b600580546001600160a01b03191633908117825590929015620004b65762000199816002546200073c565b60025533600052600085526040600020620001b68282546200073c565b905560405190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef863393a3805190888211620004a1576006548781811c9116801562000496575b8682101462000481579081878493116200042c575b508590878311600114620003c357600092620003b7575b505060001982891b1c191690861b176006555b8851968711620003a257600754918583811c9316801562000397575b8484101462000382575083821162000338575b505080918511600114620002c85750839291839160ff97600095620002bc575b50501b92600019911b1c1916176007555b1660ff1960085416176008556040516108a19081620007618239f35b0151935038806200028f565b91939290601f19841696600760005283600020936000905b898210620003205750508460ff981062000305575b50505050811b01600755620002a0565b01519060f884600019921b161c1916905538808080620002f5565b808885978294968601518155019601930190620002e0565b6007600052826000209084808901821c830193858a1062000378575b01901c019084905b8281106200036b57506200026f565b600081550184906200035c565b9350829362000354565b602290634e487b7160e01b6000525260246000fd5b92607f16926200025c565b604182634e487b7160e01b6000525260246000fd5b0151905038806200022d565b90889350601f198316916006600052876000209260005b89828210620004155750508411620003fc575b505050811b0160065562000240565b0151600019838b1b60f8161c19169055388080620003ed565b8385015186558c97909501949384019301620003da565b90915060066000528560002087808501861c82019288861062000477575b918a918695949301871c01915b8281106200046757505062000216565b600081558594508a910162000457565b925081926200044a565b602285634e487b7160e01b6000525260246000fd5b90607f169062000201565b604184634e487b7160e01b6000525260246000fd5b600080fd5b0151905038806200015c565b90899350601f1983169187600052886000209260005b8a828210620005175750508411620004fe575b505050811b0183556200016e565b0151600019838c1b60f8161c19169055388080620004f0565b8385015186558d97909501949384019301620004dd565b90915085600052866000208880850160051c8201928986106200057a575b918b91869594930160051c01915b8281106200056a57505062000145565b600081558594508b91016200055a565b925081926200054c565b602286634e487b7160e01b6000525260246000fd5b90607f169062000130565b634e487b7160e01b600052604160045260246000fd5b01519050388062000101565b90899350601f198316918b600052886000209260005b8a828210620006165750508411620005fd575b505050811b01875562000113565b0151600019838c1b60f8161c19169055388080620005ef565b8385015186558d97909501949384019301620005dc565b90915089600052866000208880850160051c82019289861062000679575b918b91869594930160051c01915b82811062000669575050620000ea565b600081558594508b910162000659565b925081926200064b565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000d3565b6040519190601f01601f191682016001600160401b03811183821017620005a457604052565b919080601f84011215620004b65782516001600160401b038111620005a45760209062000700601f8201601f19168301620006a4565b92818452828287010111620004b65760005b8181106200072857508260009394955001015290565b858101830151848201840152820162000712565b919082018092116200074a57565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461065757508163095ea7b31461062d57816318160ddd1461060e57816323b872dd14610587578163313ce56714610565578163392f37e9146104a9578163395093511461045957816342966c68146103c35781635600f04f1461030757816370a08231146102d057816383197ef0146102a057816395d89b411461019f57508063a457c2d714610145578063a9059cbb146101155763dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e661075a565b6100ee610775565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b503461011157806003193601126101115760209061013e61013461075a565b60243590336107ae565b5160018152f35b503461011157806003193601126101115761015e61075a565b338352600160209081528284206001600160a01b03831685529052818320549092602435919082821061019c57509261013e91602094039033610813565b80fd5b838334610111578160031936011261011157805190828454600181811c90808316928315610296575b602093848410811461028357838852908115610267575060011461022f575b505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061025357505050508301018580806101e7565b80548886018301529301928490820161023d565b60ff1916878501525050151560051b84010190508580806101e7565b634e487b7160e01b895260228a52602489fd5b91607f16916101c8565b833461019c578060031936011261019c576005546001600160a01b0316903382900361019c5760025461019c5750ff5b5050346101115760203660031901126101115760209181906001600160a01b036102f861075a565b16815280845220549051908152f35b83833461011157816003193601126101115780519082600654600181811c908083169283156103b9575b602093848410811461028357838852908115610267575060011461038057505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060068652828620918387935b8385106103a557505050508301018580806101e7565b80548886018301529301928490820161038f565b91607f1691610331565b82843461019c57602036600319011261019c576005546001600160a01b0316833533829003610455578115610455578183528260205283832054818110610451578190038484205560025481810390811161043e57602095506000805160206108758339815191529186916002558551908152a35160018152f35b634e487b7160e01b845260118652602484fd5b8380fd5b8280fd5b50503461011157806003193601126101115761013e6020926104a261047c61075a565b338352600186528483206001600160a01b0382168452865291849020546024359061078b565b9033610813565b83833461011157816003193601126101115780519082600754600181811c9080831692831561055b575b602093848410811461028357838852908115610267575060011461052257505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060078652828620918387935b83851061054757505050508301018580806101e7565b805488860183015293019284908201610531565b91607f16916104d3565b50503461011157816003193601126101115760209060ff600854169051908152f35b505034610111576060366003190112610111576105a261075a565b6105aa610775565b6001600160a01b03821684526001602081815284862033875290528385205460443595929392909182016105e7575b60208561013e8887876107ae565b85821061019c575091849161060460209661013e95033383610813565b91948193506105d9565b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061013e61064d61075a565b6024359033610813565b8490843461045557826003193601126104555782600354600181811c90808316928315610707575b60209384841081146102835783885290811561026757506001146106ce57505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060038652828620918387935b8385106106f357505050508301018580806101e7565b8054888601830152930192849082016106dd565b91607f169161067f565b6020808252825181830181905290939260005b82811061074657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610724565b600435906001600160a01b038216820361077057565b600080fd5b602435906001600160a01b038216820361077057565b9190820180921161079857565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610770571691821561077057600082815280602052604081205482811061011157916040602092826000805160206108758339815191529503828220558681522061080882825461078b565b9055604051908152a3565b6001600160a01b0390811691821561077057169182156107705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000811000a`,
  BytecodeLen: 14898,
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

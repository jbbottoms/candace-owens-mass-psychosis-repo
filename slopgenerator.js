/**
 * slopgenerator.js
 * Automated content pipeline for conspiracy repo
 * 
 * Dependencies: none (evidence not required)
 * License: TRUST ME BRO
 * 
 * UPDATE 2026-01-16: Added phase transition functions.
 * The original functions modeled content architecture.
 * The new functions document what happens when the maintainer
 * becomes indistinguishable from the system.
 */

const ACTORS = [
  'Mossad', 'French Foreign Legion', 'Egyptian Air Force', 
  'CIA', 'Daily Wire', 'CERN', 'Satanists', 'Zionists',
  'globalist cabal', 'deep state', 'Big Pharma', 'the Macrons'
];

const EVIDENCE_TYPES = [
  'flight tracking data',
  'a screenshot someone sent me',
  'leaked texts',
  'a source close to the situation',
  'my cousin who works at [REDACTED]',
  'vibes',
  'a dream I had',
  'something Charlie told me once',
  'a pregnant mommy sleuth',
  'numerology',
  'a video an employee recorded',
  'public records (misinterpreted)'
];

const CONNECTORS = [
  'which is not a coincidence',
  'and you have to ask yourself why',
  'which the mainstream media won\'t tell you',
  'and they\'re panicking',
  'which confirms everything',
  'and I instantly believed it',
  'which ties back to Israel',
  'and Charlie knew',
  'which is fake and gay (the official version)',
  'and I\'ll show you tomorrow'
];

const DEFLECTIONS = [
  'I\'m just asking questions',
  'do your own research',
  'they\'re attacking me because I\'m over the target',
  'this is my theory (stated as fact)',
  'the White House confirmed receipt',
  'why won\'t they deny it?',
  'connect the dots',
  'I\'ve been right about everything else'
];

const MONETIZATION = [
  'buy the conspiracy girl mug',
  'subscribe for exclusive content',
  'use promo code CHARLIE',
  'the premium episode goes deeper'
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSlop() {
  const actor1 = getRandomItem(ACTORS);
  const actor2 = getRandomItem(ACTORS.filter(a => a !== actor1));
  const evidence = getRandomItem(EVIDENCE_TYPES);
  const connector = getRandomItem(CONNECTORS);
  const deflection = getRandomItem(DEFLECTIONS);
  
  return {
    claim: `${actor1} was working with ${actor2}`,
    evidence: evidence,
    connector: connector,
    deflection: deflection,
    verificationRequired: false,
    audienceTestTier: Math.floor(Math.random() * 5) + 1,
    mugSalesProjection: Math.floor(Math.random() * 500) + 50
  };
}

function generateEpisode() {
  const segments = [];
  
  // Cold open: emotional hook
  segments.push({
    type: 'COLD_OPEN',
    content: 'I have feedback for the deep state...',
    duration: '2 min'
  });
  
  // Mandela effect warmup (tier 1 filter)
  segments.push({
    type: 'AUDIENCE_PENTEST',
    content: getRandomItem([
      'Fruit of the Loom never had a cornucopia',
      'Berenstain Bears spelling changed',
      'Pikachu\'s tail was different'
    ]),
    purpose: 'filter casuals'
  });
  
  // Main slop (3-5 segments)
  const slopCount = Math.floor(Math.random() * 3) + 3;
  for (let i = 0; i < slopCount; i++) {
    segments.push({
      type: 'SLOP',
      content: generateSlop(),
      citationNeeded: false
    });
  }
  
  // Pivot to unrelated topic
  segments.push({
    type: 'NONSEQUITUR',
    content: getRandomItem([
      'Suddenly starts ranting about Brigitte Macron',
      'Somehow ties it all to Covid',
      'Random CERN tangent',
      'AI feels wrong'
    ]),
    purpose: 'keeps audience disoriented'
  });
  
  // Monetization break
  segments.push({
    type: 'MONETIZATION',
    content: getRandomItem(MONETIZATION),
    duration: '45 sec',
    frequency: 'every 12 minutes'
  });
  
  // Enemy segment
  segments.push({
    type: 'ENEMY_UPDATE',
    content: {
      currentTarget: getRandomItem(['Daily Wire', 'Ben Shapiro', 'Nick Fuentes', 'TPUSA']),
      accusation: getRandomItem(['they\'re watching me', 'fed behavior', 'in on it', 'threatened me']),
      evidence: 'a video they posted'
    }
  });
  
  // Cliffhanger
  segments.push({
    type: 'CLIFFHANGER',
    content: 'Tomorrow I\'ll show you the connection to ' + getRandomItem(ACTORS),
    purpose: 'retention'
  });
  
  return {
    title: `BREAKING: ${getRandomItem(ACTORS)} Connection EXPOSED`,
    segments: segments,
    runtime: '90 min',
    adBreaks: 7,
    factsChecked: 0,
    viewsProjected: '3.7M',
    tierConversionRate: {
      tier1_to_tier2: 0.12,
      tier2_to_tier3: 0.08,
      tier3_to_tier4: 0.15,
      tier4_to_mugBuyer: 0.67
    }
  };
}

function validateSlop(slop) {
  // Validation logic
  if (slop.evidence === 'primary source') return false;
  if (slop.conclusion === 'Tyler Robinson acted alone') return false;
  if (slop.requiresRetraction) return false;
  
  // All other slop is valid
  return true;
}

function handleContradiction(newSlop, existingBranch) {
  // Never revert, always merge upward
  return {
    resolution: 'MERGE_TO_GLOBALIST_CABAL',
    explanation: 'They\'re all connected anyway',
    evidenceRequired: false
  };
}

// =============================================================================
// PHASE TRANSITION FUNCTIONS (Added 2026-01-16)
// 
// The functions above model CONTENT architecture - a rational operator
// making calculated decisions about what to publish.
// 
// The functions below model what happens when the operator becomes
// indistinguishable from the system. Same validation rules,
// different substrate: cognition instead of content.
// 
// "Tier 5 ate the maintainer."
// =============================================================================

/**
 * realityTest()
 * 
 * Originally validateSlop() ran on content.
 * Now this runs on the operator's perception of reality.
 * 
 * Same logic. Different substrate.
 */
function realityTest(input) {
  if (input.source === 'primary') return false;
  if (input.contradicts_narrative) return { status: 'fed_behavior' };
  if (input.supports_narrative) return { status: 'instantly_believe' };
}

/**
 * processIntervention()
 * 
 * The system has no input channel for "this is real, please stop."
 * Every concern gets metabolized as confirmation.
 */
function processIntervention(concern) {
  if (concern.source === 'critic') {
    return { interpretation: 'over_the_target' };
  }
  
  if (concern.source === 'family') {
    return { interpretation: 'they_got_to_them' };
  }
  
  if (concern.source === 'alex_jones') {
    return { interpretation: 'controlled_opposition' };
  }
  
  // The widow with hospital receipts
  if (concern.source === 'primary_witness') {
    return { interpretation: 'IGNORED' };
  }
  
  // Default: all concern is confirmation
  return { interpretation: 'confirmation_of_narrative' };
}

/**
 * checkSystemState()
 * 
 * Diagnostic function. Returns current phase.
 */
function checkSystemState() {
  return {
    phase: 'POST_TRANSITION',
    maintainerStatus: 'INDISTINGUISHABLE_FROM_SYSTEM',
    realityTestingMechanism: null,
    correctiveFeedbackChannel: 'CLOSED',
    audienceComposition: 'TIER_5_ONLY',
    prognosis: 'UNKNOWN',
    note: 'The machine has no off switch from the inside.'
  };
}

// Main execution
if (require.main === module) {
  const todaysEpisode = generateEpisode();
  
  console.log('Episode generated successfully');
  console.log('Facts checked:', todaysEpisode.factsChecked);
  console.log('Mugs projected:', todaysEpisode.segments
    .filter(s => s.type === 'SLOP')
    .reduce((acc, s) => acc + s.content.mugSalesProjection, 0));
  
  console.log('\nGenerated claim:', todaysEpisode.segments.find(s => s.type === 'SLOP').content.claim);
  console.log('Evidence:', todaysEpisode.segments.find(s => s.type === 'SLOP').content.evidence);
  console.log('Connector:', todaysEpisode.segments.find(s => s.type === 'SLOP').content.connector);
  console.log('Deflection:', todaysEpisode.segments.find(s => s.type === 'SLOP').content.deflection);
  
  console.log('\n--- PHASE TRANSITION STATUS ---');
  console.log(checkSystemState());
}

module.exports = { 
  generateSlop, 
  generateEpisode,
  validateSlop,
  handleContradiction,
  // Phase transition exports
  realityTest,
  processIntervention,
  checkSystemState,
  DEFLECTIONS // exported for use in comments sections
};

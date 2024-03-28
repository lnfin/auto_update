module.exports = {
  apps : [{
    name   : 'llm_detection_validators_main_process',
    script : 'neurons/validator.py',
    interpreter: 'python3',
    min_uptime: '5m',
    max_restarts: '5',
    args: ['--wallet.name','vali','--wallet.hotkey','default','--axon.port','40085','--subtensor.network','test','--netuid','87']
  }]
}

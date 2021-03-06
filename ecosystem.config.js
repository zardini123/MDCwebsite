module.exports = {
  apps: [{
    name: 'MDCwebsite',
    script: './index.js'
  }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-17-37-224.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/webserverInstance.pem',
        ref: 'origin/master',
        repo: 'git@github.com:zardini123/MDCwebsite.git',
        path: '/home/ubuntu/MDCwebsite',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
  }
}

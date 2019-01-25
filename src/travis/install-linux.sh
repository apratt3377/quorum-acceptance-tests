#!/bin/bash
# This script is called from TRAVIS CI configured in quorum repo. Its called from the install: part of the build job
# This script installs the dependencies needed to bring up the 4node network for a specific consensus and run the automated acceptance test against it

echo "install started..."
echo "getting tessera jar..."
wget https://github.com/jpmorganchase/tessera/releases/download/tessera-0.8/tessera-app-0.8-app.jar -O tessera.jar -q
sudo cp tessera.jar $HOME
sudo chmod 755 $HOME/tessera.jar
echo "getting gauge jar..."
wget https://github.com/getgauge/gauge/releases/download/v1.0.3/gauge-1.0.3-linux.x86_64.zip -O gauge.zip -q
sudo unzip -o gauge.zip -d /usr/local/bin
echo "installing gauge..."
cd $TRAVIS_HOME/quorum-acceptance-tests
gauge telemetry off
gauge install
echo "install done"

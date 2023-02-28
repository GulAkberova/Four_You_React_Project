echo "Switching to branch master"
git checkout master

echo "Building app ..."
npm run build

echo "Deploying files to server ..."
scp -r build/* foryou@135.181.197.175:/var/www/135.181.197.175/ 

echo "Done!"
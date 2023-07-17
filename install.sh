(
  cd micro_app_host
  npm i
)
(
  cd micro_app_one
  npm i
)
(
  cd micro_app_two
  npm i
  ./compile.sh
)

echo "\n\n"

BOLD='\033[1m'
NB='\033[0m'

RED='\033[0;31m'
NC='\033[0m' # No Color
echo "${RED}${BOLD}in separate terminal windows, cd into 'micro_app_host' and 'micro_app_one' and run 'npm run start' in each folder${NB}${NC}"
echo "${RED}${BOLD}in this terminal window, cd into 'web_server' and run 'docker-compose up' to start the web server and navigate to localhost:8080${NB}${NC}"